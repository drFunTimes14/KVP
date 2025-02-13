document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("submit");

    let login = false;

    function moveFocus(currentInput, nextInputId) {
        if (currentInput.value.length == currentInput.maxLength && !isNaN(currentInput.value)) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        }
    }

    function moveBackFocus(event, currentInput, prevInputId) {
        if (event.key === "Backspace" && currentInput.value.length === 0) {
            const prevInput = document.getElementById(prevInputId);
            if (prevInput) {
                prevInput.focus();
            }
        }
    }

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            submit.click();
        }
    }

    document.getElementById('pin1').addEventListener('input', function () {
        moveFocus(this, 'pin2');
    });
    document.getElementById('pin2').addEventListener('input', function () {
        moveFocus(this, 'pin3');
    });
    document.getElementById('pin3').addEventListener('input', function () {
        moveFocus(this, 'pin4');
    });

    document.getElementById('pin2').addEventListener('keydown', function (event) {
        moveBackFocus(event, this, 'pin1');
    });
    document.getElementById('pin3').addEventListener('keydown', function (event) {
        moveBackFocus(event, this, 'pin2');
    });
    document.getElementById('pin4').addEventListener('keydown', function (event) {
        moveBackFocus(event, this, 'pin3');
    });

    document.getElementById('pin4').addEventListener('keydown', function (event) {
        handleEnterKey(event);
    });

    submit.addEventListener("click", function () {
        const pin = [
            document.getElementById('pin1').value,
            document.getElementById('pin2').value,
            document.getElementById('pin3').value,
            document.getElementById('pin4').value
        ].join('');

        if (pin.length === 4 && !isNaN(pin)) {
            if (pin == 2025) {
                window.location.href = "album/album.html";
                login = true;
                localStorage.setItem('loginStatus', 'true');  // Update login status in localStorage
            } else {
                alert("Invalid Pin.");
            }
        } else {
            alert('Please enter a valid 4-digit PIN.');
        }
    });
});
