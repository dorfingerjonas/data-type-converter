window.addEventListener('load', () => {
    const button = document.querySelector('#button');

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            button.click();
        }
    });

    button.addEventListener('click', () => {    
        const input = document.querySelector("#textarea").value;
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const res = JSON.parse(this.responseText);
                const types = ['string', 'int', 'double'];
                let validTypes = '';

                for (const type of res) {
                    validTypes += type;
                }                

                for (const type of types) {
                    if (validTypes.includes(type)) {
                        document.querySelector(`#${type} .times`).style.opacity = 0;
                        document.querySelector(`#${type} .times`).classList.add('hide');

                        setTimeout(() => {
                            document.querySelector(`#${type} .check`).style.opacity = 1;
                            document.querySelector(`#${type} .check`).classList.remove('hide');
                        }, 200);
                    } else {
                        document.querySelector(`#${type} .check`).style.opacity = 0;
                        document.querySelector(`#${type} .check`).classList.add('hide');
                        
                        setTimeout(() => {
                            document.querySelector(`#${type} .times`).style.opacity = 1;
                            document.querySelector(`#${type} .times`).classList.remove('hide');
                        }, 200);
                    }
                }
            }
        };

        xhttp.open("POST", "converter.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("input=" + input);
    });
});