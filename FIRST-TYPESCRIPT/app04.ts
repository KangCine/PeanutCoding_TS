const sendGreeting = (message = 'Hello', userName = 'world'): void => console.log(`${message}, ${userName}!`);

sendGreeting();
sendGreeting('Good morning');
sendGreeting('Good afternoon', 'Cine');