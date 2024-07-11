function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here

    // Will see if the input starts with the string 'pet_'
    let containsPets = input.startsWith('pet_')



    // Will see if number inserted is just number or other characters
    let numberEl = Array.from(input.substr(4,4))
    let numberArray = []

    numberEl.forEach(e => {
        let convert = Number(e)
        numberArray.push(convert)
    });

    let checkIfNum = numberArray.includes(NaN)



    // Check if name follows after number
    let includesName = input.length > 8



    // Wll check if all criteria is matched
    function checkAll() {
        if(containsPets === true && checkIfNum === false && includesName === true) {
            result = '<i class="fa-solid fa-circle c-green"></i> Valid Syntax'
        } else {
            result = '<i class="fa-solid fa-circle c-red"></i> Invalid Syntax'
        }
    }

    checkAll()

        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerHTML = result;
}


