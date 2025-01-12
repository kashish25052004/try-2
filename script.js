document.getElementById('target_completed').addEventListener('input', calculatePercentage);
document.getElementById('total_target').addEventListener('input', calculatePercentage);

function calculatePercentage() {
    const total = parseFloat(document.getElementById('total_target').value) || 0;
    const completed = parseFloat(document.getElementById('target_completed').value) || 0;
    
    if (total > 0) {
        const percentage = (completed / total) * 100;
        document.getElementById('percentage').value = percentage.toFixed(2);
        const left = 100.00 - percentage;
        const totalrs = (left/100.00) * 50;
        document.getElementById('rupees').value = totalrs.toFixed(2);

    } else {
        document.getElementById('percentage').value = '';
    }
}


document.getElementById('dataForm').onsubmit = function(event) {
    const totalTarget = parseInt(document.getElementById('total_target').value,10);
    const targetCompleted = parseInt(document.getElementById('target_completed').value,10)

    if(targetCompleted > totalTarget){
    
    alert('Total target should be greater then Target completed');
    return;

    }
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        total_target: document.getElementById('total_target').value,
        target_completed: document.getElementById('target_completed').value,
        percentage: document.getElementById('percentage').value,
        rupees: document.getElementById('rupees').value

    };

    fetch('https://script.google.com/macros/s/AKfycbyQwfJ345WbTokY-HBpad535H_WH1H9c_ChpoHHKqIDZz6VoQLRu3lhuGBbRuU3vhg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(() => {
        alert('Thank you! Your data has been submitted.');
        document.getElementById('dataForm').reset();
    }).catch((error) => {
        alert('There was an error. Please try again.');
        console.error(error);
    });
}
