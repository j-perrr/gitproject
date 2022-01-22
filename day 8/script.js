alert('Hello!');
        console.log(2 + 2);
        let cup = 'coffee';
        if (cup === 'coffee') alert('Amazing!');
        if (cup === 'mocha') alert('I like it!');
        if (cup === 'coffee') alert('I like it!');
        document.querySelector('div');

        cup = document.querySelector('h1');
        cup.addEventListener('click', updateValue);
        
        function updateValue()
        {
            let userInput = prompt('Type Something here!')
            cup.textContent = userInput;
        }
        