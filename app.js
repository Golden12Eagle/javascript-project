window.onload = ()=>{

    function currentTime() {
        let date = new Date(); 
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";
      
        if(hours == 0){
            hours = 12;
        }
        if(hours > 12){
            hours = hours - 12;
            session = "PM";
         }
      
         hours = (hours < 10) ? "0" + hours : hours;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
         ss = (ss < 10) ? "0" + ss : ss;
          
         let time = hours + ":" + minutes + ":" + ss + " " + session;
      
        document.getElementById("clock").innerText = time; 
        let t = setTimeout(function(){ currentTime() }, 1000);
      }
      currentTime();
    this.sessionStorage.setItem('username', 'GOLDEN');
    this.sessionStorage.setItem('password', 'golden');
}
var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = ()=>{return false;}
login.onclick = ()=>{
    if ((input[0].value != "") && (input[1].value != ""))
     {
         if ((input[0].value == sessionStorage.getItem('username')) && (input[1].value == sessionStorage.getItem('password')))

          {
            form.onsubmit = ()=>{return 1;}
              document.cookie = "username="+input[0].value;
              document.cookie = "password="+input[1].value;
          }
          else
          {
              if ((input[0].value != sessionStorage.getItem('username')) )

              {
                  input[0].nextElementSibling.textContent = "Username NOT match";
                setTimeout(()=>{
                    input[0].nextElementSibling.textContent = "";

                }, 2000);
              }
              if ((input[1].value != sessionStorage.getItem('password')) )
              {
                  input[1].nextElementSibling.textContent = "Password NOT match";
                setTimeout(()=>{
                    input[1].nextElementSibling.textContent = "";
                }, 2000);
        }
          }
     }

    else
     {
        if (input[0].value == "")
        {
            input[0].nextElementSibling.textContent = "Username is empty";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
            }, 2000);
        }

        if (input[1].value == "")
        {
            input[1].nextElementSibling.textContent = "Password is empty";
            setTimeout(()=>{
                input[1].nextElementSibling.textContent = "";
            }, 2000);

        }

     }

}