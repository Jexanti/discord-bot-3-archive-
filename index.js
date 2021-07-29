//Require the libraries
const Discord = require('discord.js')

//Create a new instance
const client = new Discord.Client()

//Get the bot's token
const config = require('./config.json')

//create variables
var botprefix = config.prefix

//Log when the client is ready
client.on('ready', () => {
    console.log('The client is ready!')
});

//When a message is sent
client.on('message', message => {
	
	//prefix
	if (message.content === 'prefix') {
		message.channel.send('**PREFIX IS '+botprefix+'** *(case sensitive, keep all characters lowercase)*.');
		console.log('Command run: prefix by user '+message.author);
	}
	
	//[prefix]help
	if (message.content === botprefix+'help') {
		message.channel.send('Visit **this site** for a list of my commands: https://sites.google.com/view/foxiken-website/commands \nOr, type  `'+botprefix+'help embed` to get help within discord.');
		console.log('Command run: '+botprefix+'help by user '+message.author);
	}
	
	//[prefix]version
    if (message.content === botprefix+'version') {
		message.channel.send('I am currently running **version 10.3.3** *(Nickname: The helpful update)* - Run '+botprefix+'changelog to see what is new!');
		console.log('Command run: '+botprefix+'version by user '+message.author);
	}
	
	//[prefix]hello
	if (message.content === botprefix+'hello') {
		const responses = ["Hi!","Hello!","Bonjour!","Hey!","Guten Tag!","Hallo!","Ola!","Hej!"]
		var responseIndex = Math.round(Math.random() * responses.length-1)
		var response = responses[responseIndex]
		console.log('Command run: '+botprefix+'hello with response '+(responseIndex+1)+' by user '+message.author)
		message.channel.send(response)
	}
	
	//[prefix]test
	if (message.content === botprefix+'test') {
		message.channel.send('I am online and **running fine!** :)');
		console.log('Command run: '+botprefix+'test by user '+message.author);
	}
	
	//[prefix]suggest
	if (message.content === botprefix+'suggest') {
		message.channel.send('Please visit **this site** to suggest something: https://sites.google.com/view/foxiken-website/suggest');
		console.log('Command run: '+botprefix+'test by user '+message.author);
	}
	
	//[prefix]invite
	if (message.content === botprefix+'invite') {
		message.channel.send('Invite me to your server with **this link:** https://discord.com/oauth2/authorize?client_id=799198242683879454&permissions=3153024&scope=bot');
		console.log('Command run: '+botprefix+'invite by user '+message.author)
	}
	
	//[prefix]joke
	if (message.content === botprefix+'joke') {

		//define joke 1
		function func01() {
			function function01() {
   			 	// stuff you want to happen right away
				message.channel.send("What's a dog's favourite card game?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response dog card game by user '+message.author)
			}

			function function02() {
    			// all the stuff you want to happen after that pause
 				message.channel.send('**Go fetch!**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response dog card game by user '+message.author)
			}

			// call the first chunk of code right away
			function01();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function02, 5000);
		}	

		//define joke 2
		function func02() {
			function function11() {
   				 // stuff you want to happen right away
				message.channel.send("What time does a duck wake up?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response duck wake up by user '+message.author)
			}

			function function12() {
    				// all the stuff you want to happen after that pause
 				message.channel.send('**At the quack of dawn.**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response duck wake up by user '+message.author)
			}

			// call the first chunk of code right away
			function11();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function12, 5000);
		}	
		
		//define joke 3
		function func03() {
			function function31() {
   				 // stuff you want to happen right away
				message.channel.send("What's the best thing about Switzerland?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response Switzerland Flag by user '+message.author)
			}

			function function32() {
    				// all the stuff you want to happen after that pause
 				message.channel.send('**I do not know, but the flag is a big plus.**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response Switzerland Flag by user '+message.author)
			}

			// call the first chunk of code right away
			function31();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function32, 5000);
		}	
		
		//define joke 4
		function func04() {
			function function21() {
   				 // stuff you want to happen right away
				message.channel.send("Have you heard of the mathematician who was afraid of negative numbers?");
				console.log('Command partially run: '+botprefix+'joke line 1 with response Negative mathematician by user '+message.author)
			}

			function function22() {
    				// all the stuff you want to happen after that pause
 				message.channel.send('**He will stop at nothing to avoid them.**');
				 console.log('Command partially run: '+botprefix+'joke line 2 with response negative mathematitian by user '+message.author)
			}

			// call the first chunk of code right away
			function21();

			// call the rest of the code and have it execute after 3 seconds
			setTimeout(function22, 5000);
		}	
		
		//get random joke
		function random(){
			var i  = Math.floor(Math.random()*20)%5;
		  	if(i<=0) return random();
		 	return i;
		}

		//define the execute command
		function execute1(){
		   	var i = random();
		   	eval('func0'+i+'()');
		}

		//execute it
		execute1();
	}
	
	//[prefix]website
	if (message.content === botprefix+'website') {
		message.channel.send('Here is a **direct link** to my website: https://sites.google.com/view/foxiken-website');
		console.log('Command run: '+botprefix+'website by user '+message.author);
	}
	
	//[prefix]join
	if (message.content === botprefix+'join') {
		message.channel.send('Join the **Foxiken Community Discord server** here: https://discord.gg/b7eGwKupp3');
		console.log('Command run: '+botprefix+'join by user '+message.author);
	}
	
	//[prefix]dev
	if (message.content === botprefix+'dev') {
		message.channel.send('To apply to become a developer, join the discord server (using  `'+botprefix+'join`), then DM Jexanti.');
		console.log('Command run: '+botprefix+'dev by user '+message.author);
	}
	
	//troubleshoot
	if (message.content === 'troubleshoot') {
		message.channel.send('Troubleshoot my commands **here:** https://sites.google.com/view/foxiken-website/troubleshoot');
		console.log('Command run: '+botprefix+'troubleshoot by user '+message.author);
	}

	//[prefix]troubleshoot
	if (message.content === botprefix+'troubleshoot') {
		message.channel.send('Troubleshoot my commands **here:** https://sites.google.com/view/foxiken-website/troubleshoot');
		console.log('Command run: '+botprefix+'troubleshoot by user '+message.author);
	}
	
	//[prefix]rickroll tts
	if (message.content === botprefix+'rickroll tts') {
		message.channel.send("Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say, goodbye. Never gonna tell, a lie, and hurt you.", {
			tts: true
		})
		message.channel.send('**You have been rick rolled by <@'+message.author+'>**', {
			tts: true
		})
		message.channel.send('https://media.discordapp.net/attachments/801006240905560084/842324818379407390/image0.jpg');
		message.channel.send('*Did you know you can type* `'+botprefix+'rickroll tts` *to make me read Rick Astley in text-to-speech?*')
		console.log('Command run: '+botprefix+'rickroll (tts:true) by user '+message.author);
	}
	
	//[prefix]rickroll
	if (message.content === botprefix+'rickroll') {
		message.channel.send("Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say, goodbye. Never gonna tell, a lie, and hurt you.")
		message.channel.send('**You have been rick rolled by <@'+message.author+'>**')
		message.channel.send('https://media.discordapp.net/attachments/801006240905560084/842324818379407390/image0.jpg');
		console.log('Command run: '+botprefix+'rickroll (tts:false) by user '+message.author);
	}
	
	//[prefix]changelog
	if (message.content === botprefix+'changelog') {
		message.channel.send("Click here for the changelog: https://sites.google.com/view/foxiken-website/changelog");
		console.log('Command run: '+botprefix+'changelog by user '+message.author);
	}
	
	//[prefix]links
	if (message.content === botprefix+'links') {
		message.channel.send("Click here to see some useful links: https://www.linktr.ee/foxiken");
		console.log('Command run: '+botprefix+'links by user '+message.author);
	}

	//[prefix]ikea
	if (message.content === botprefix+'ikea') {
		const ikearesponses = ["Hej!","Who doesn't like **swedish Furniture?**","anyone who insults those beautiful alex drawers **will die**","***IKEA IS LIFE!***"]
		var ikearesponseIndex = Math.round(Math.random() * ikearesponses.length-1)
		var ikearesponse = ikearesponses[ikearesponseIndex]
		console.log('Command run: '+botprefix+'hello with response '+(ikearesponseIndex+1)+' by user '+message.author)
		message.channel.send(ikearesponse)
	}

	//[prefix]help embed
	if (message.content === botprefix+'help embed') {
		const helpEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Help",
			description: "A help command that doesn't use an external website!",
			fields: [
				{
					name: "Here are the commands you can use to get help:",
					value: "**Fun:**\nType  `"+botprefix+"help embed fun` to see these commands.\n\n**Rick Astley:**\nType  `"+botprefix+"help embed rick` to see these commands\n\n**Utilities:**\nType  `"+botprefix+"help embed utilities` to see these commands\n\n**Text:**\nType  `"+botprefix+"help embed text` to view these commands\n\n**Links:**\nType  `"+botprefix+"help embed links` to see these commands",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The '+botprefix+'help embed command was used.",
			},
		}
		message.channel.send({embed : helpEmbed});
		console.log('Command run: '+botprefix+'help embed by user '+message.author);
		msgRespondedTo = true
	}

	//[prefix]help embed fun
	if (message.content === botprefix+'help embed fun') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Help",
			description: "A help command that doesn't use an external website!",
			fields: [
				{
					name: "Here are my fun commands:",
					value: "**"+botprefix+"joke**\nGet one of 4 absolutely terrible jokes.\n\n**"+botprefix+"ikea**\nI mean who doesn't love IKEA?\n\n**@Foxiken**\nPing me to see my response.",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"help embed fun command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed fun by user '+message.author);
		msgRespondedTo = true
	}

	//[prefix]help embed rick
	if (message.content === botprefix+'help embed rick') {
		const rickhelpEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Help",
			description: "A help command that doesn't use an external website!",
			fields: [
				{
					name: "Here are my Rick Astley commands:",
					value: "**"+botprefix+"rickroll**\nRickroll everyone.\n\n**"+botprefix+"rickroll tts**\nRickroll everyone, but everyone focused on the channel will have the chorus read in text to speech.",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"help embed rick command was used.",
			},
		}
		message.channel.send({embed : rickhelpEmbed});
		console.log('Command run: '+botprefix+'help embed rick by user '+message.author);
		msgRespondedTo = true
	}

	//[prefix]help embed utilities
	if (message.content === botprefix+'help embed utilities') {
		const utilhelpEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Help",
			description: "A help command that doesn't use an external website!",
			fields: [
				{
					name: "Here are my utility commands:",
					value: "**prefix**\nGives you my prefix\n\n**"+botprefix+"version**\nTells you which version I am on\n\n**"+botprefix+"test**\nTest if I am working.\n\n**"+botprefix+"suggest**\nSuggest something!\n\n**"+botprefix+"dev**\nApply to become a developer\n\n**"+botprefix+"troubleshoot**\nTroubleshoot me. This also works without the prefix.\n\n**"+botprefix+"changelog**\nLinks to my changelog. This is version 10.3.3, the helpful update.\n\n**"+botprefix+"help**\nLinks to my help website.\n\n**"+botprefix+"help embed**\n"+botprefix+"help, but as an embed on discord so no website is needed.\n\n**"+botprefix+"changelog embed**\nSee the changelog from within the comfort of your discord client.",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"help embed utilities command was used.",
			},
		}
		message.channel.send({embed : utilhelpEmbed});
		console.log('Command run: '+botprefix+'help embed utilities by user '+message.author);
		msgRespondedTo = true
	}

	//[prefix]help embed text
	if (message.content === botprefix+'help embed text') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Help",
			description: "A help command that doesn't use an external website!",
			fields: [
				{
					name: "Here are my text commands:",
					value: "**"+botprefix+"hello**\nWill respond with one of 8 messages, all of which say hi in different ways.",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"help embed text command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed text by user '+message.author);
		msgRespondedTo = true
	}

	//[prefix]help embed links
	if (message.content === botprefix+'help embed links') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Help",
			description: "A help command that doesn't use an external website!",
			fields: [
				{
					name: "Here are my commands that link to things:",
					value: "**"+botprefix+"invite**\nInvite me to your server!\n\n**"+botprefix+"website**\nLinks to the homepage of my website.\n\n**"+botprefix+"join**\nJoin the Foxiken Community discord server!\n\n**"+botprefix+"links**\nLinks to my Linktree page.\n\n**"+botprefix+"upvote**\nLinks to all the websites where you can (and hopefully will!) vote for me.",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"help embed fun command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed by user '+message.author);
		msgRespondedTo = true
	}

	//[prefix]upvote
	if (message.content === botprefix+'upvote') {
		message.channel.send('Thank you for deciding to vote for me! If you still want to do so, here are some links to websites where you can vote for me:\n\n**top.gg**\nhttps://top.gg/bot/799198242683879454\n\n**discordbotlist.com**\nhttps://discordbotlist.com/bots/foxiken\n\n**Thanks!**')
	}
	
	//[prefix]changelog embed
	if (message.content === botprefix+'changelog embed') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Changelog",
			description: "View the changelog.",
			fields: [
				{
					name: "Here are some changelog commands",
					value: "**"+botprefix+"changelog embed list**\nList all the different versionsof the bot.\n\n**"+botprefix+"changelog embed view** `[version number]`\nView all the changes in a specific version\n\n**"+botprefix+"changelog embed view latest**\nView all the changes in the latest version\n\n**"+botprefix+"changelog embed view all**\nView all the changes made to the bot since version 9.1.0",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"changelog embed command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'changelog embed by user '+message.author);
		msgRespondedTo = true
	}
	
	//[prefix]changelog embed list
	if (message.content === botprefix+'changelog embed list') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Changelog",
			description: "View the changelog.",
			fields: [
				{
					name: "Here are all the versions you can request to view a changelog of, from newest to oldest.",
					value: "**Update 10.3**\n\n*To view the changelog, type*  `"+botprefix+"changelog embed view [version number (e.g. 10.3)]`*.*",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"changelog embed list command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed by user '+message.author);
		msgRespondedTo = true
	}
	
	//[prefix]changelog embed view latest
	if (message.content === botprefix+'changelog embed view latest') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Changelog",
			description: "View the changelog.",
			fields: [
				{
					name: "Here's what's new in the latest version, 10.3.3",
					value: "1) Added a confirmation to the `"+botprefix+"changelog embed view all` command, so you don't get an extremely long message without realising it.\n2) I will now respond to you if you ping me.",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"changelog embed view latest command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed by user '+message.author);
		msgRespondedTo = true
	}
	
	//[prefix]changelog embed view 10.3
	if (message.content === botprefix+'changelog embed view 10.3') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Changelog",
			description: "View the changelog.",
			fields: [
				{
					name: "Here's what's new in update 10.3 - the helpful update",
					value: "**Update 10.3.0**\n1) Added the  `"+botprefix+"help embed` command - it's the "+botprefix+"help command, but as an embed and doesn't link to the website.\n\n**Update 10.3.1**\n1) Added the  `"+botprefix+"upvote` command\n2) Fixed some invalid URLs\n\n**Update 10.3.2**\n1) Added the  `"+botprefix+"changelog embed` command\n2) Changed the response to the "+botprefix+"dev command, you can now apply to become a dev, go check it out!\n\n**Update 10.3.3**\nAdded a command where if you ping me, **i will see you**",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"changelog embed view latest command was used.",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed by user '+message.author);
		msgRespondedTo = true
	}
	
	//[prefix]changelog embed view all
	if (message.content === botprefix+'changelog embed view all') {
		message.channel.send('Are you sure you want to run this command? This command will show every change in every version in one message, so it will get *very* long in the future. Type `'+botprefix+'changelog embed view all confirm` to confirm.')
	}

	//[prefix]changelog embed view all
	if (message.content === botprefix+'changelog embed view all confirm') {
		const commandEmbed = {
			color: 0xdd9bb4,
			title: "Foxiken Changelog",
			description: "View the changelog.",
			fields: [
				{
					name: "Here's everything that's changed since version 10.3.2",
					value: "**Update 10.3.0**\n1) Added the  `"+botprefix+"help embed` command - it's the "+botprefix+"help command, but as an embed and doesn't link to the website.\n\n**Update 10.3.1**\n1) Added the  `"+botprefix+"upvote` command\n2) Fixed some invalid URLs\n\n**Update 10.3.2**\n1) Added the  `"+botprefix+"changelog embed` command\n2) Changed the response to the "+botprefix+"dev command, you can now apply to become a dev, go check it out!",
				},
			],
			timestamp: new Date(),
			footer: {
				text: "The "+botprefix+"changelog embed view all command was used. BEWARE: This could become a very long message in the future!",
			},
		}
		message.channel.send({embed : commandEmbed});
		console.log('Command run: '+botprefix+'help embed by user '+message.author);
		msgRespondedTo = true
	}

	//ping
	if (message.content === '<@!799198242683879454>') {
		message.channel.send('https://cdn.discordapp.com/attachments/868517176586436611/868526673417613353/9k.png')
		message.channel.send("Oh, it was you, <@"+message.author+">.")
	}
})

//login to client with token
client.login(config.token)