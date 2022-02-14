import { useEffect, useState } from "react";
import classes from "./form.module.css"
function FormPage(props) {
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState(0);
    const [currencyId, setcurrencyId] = useState(0);
    const [paymentId, setpaymentId] = useState(0);
    const [date, setDate] = useState("");
    const [listOfCurrencies, setListOfCurrencies] = useState([]);
    const [listOfPaymentMethods, setListOfPaymentMethods] = useState([]);
    useEffect(async () => {
        fetch("http://localhost:3004/currency/getAllCurrencies").then(
      async (res) => {
        const temp = await res.json();
        console.log(temp);
        setListOfCurrencies(temp);
      }
    );
  
      fetch("http://localhost:3004/payment/getAllPayments").then(
        async (res) => {
          const temp = await res.json();
          console.log(temp);
          setListOfPaymentMethods(temp);
        }
      );
  
    }, []);
    function search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].id === nameKey) {
              return myArray[i];
          }
      }
  }
  
  
    const onSubmitHandler = async () => {
       
    
        await fetch("http://localhost:3004/forms/send", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          body: JSON.stringify({
            sender: sender,
            receiver: receiver,
            ammount: amount,
            currencyId: currencyId,
            date: date,
            paymentId: paymentId,
          }),
        })
          .then(async (res) => {
            const temp = await res.json();
            console.log(temp);
          })
          .catch((err) => {
            console.error(err);
          });          
    
      };


    return (

        <div >
            <div className={classes.leftRail} >
            <div>
                <label>Sender Name </label><br/>
                <input value={sender}
                onChange={(e) =>{ setSender(e.target.value);
                }}></input>

            </div>
            <div>
                <label>receiver </label><br/>
                <input 
                  value={receiver}
                  onChange={(e) =>{ setReceiver(e.target.value);
                     
                  }}
                ></input>
                
            </div>
            <div>
                <label> Date </label><br/>
                <input  type="date" 
                  value={date}
                  onChange={(e) =>{ setDate(e.target.value);
                    
                  }}
                ></input>
                
            </div>
            <div>
                <label>amount</label><br/>
                <input 
                  value={amount}
                  onChange={(e) =>{ setAmount(e.target.value);
                     
                  }}
                ></input>
                
            </div>
            </div>
            <div className={classes.rightRail}>
            <div>

              <label>currency </label><br/>
              <select onChange={
                  (e) =>{ setcurrencyId(e.target.value);
                     
              }}>
            {listOfCurrencies.map((option) => (
              <option value={option.id} >{option.name}</option>
            ))}
            </select>
                
            </div>
            <div>
            <label>Payment Method  </label><br/>
            <select onChange={(e) =>{ setpaymentId(e.target.value);
            console.log(paymentId); 
            console.log(e.target.value);

              
              }}>
            {listOfPaymentMethods.map((option) => (
              <option value={option.id} >{option.name}</option>
            ))}
            </select>
                
            </div>

             <button onClick={onSubmitHandler}>send</button>
        
             </div>
        </div>
    );
}

export default FormPage;