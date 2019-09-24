const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.output.write(profile);
let profile = [];
rl.question('What\'s your name? Nicknames are also acceptable :) \n', (answer) => {
  if(answer){
    profile.push(answer)
    rl.question('What\'s an activity you like doing?\n', (answer) => {
      if (answer){
        profile.push(answer)
        rl.question('What do you listen to while doing that?\n', (answer) => {
          if (answer){
            profile.push(answer)
            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer) => {
              if (answer){
                profile.push(answer)
                rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
                  if (answer){
                    profile.push(answer)
                    rl.question('Which sport is your absolute favourite?\n', (answer) => {
                      if (answer){
                        profile.push(answer)
                        rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
                          if (answer){
                            profile.push(answer)
                            rl.output.write(`\n${profile[0]} listening to ${profile[2]} while ${profile[1]}, devouring ${profile[4]} for ${profile[3]}, prefers ${profile[5]} over any other sport, and is amazing at ${profile[6]}.\n`);
                            rl.close();
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }
});
