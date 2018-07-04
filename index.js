const money = require('discord-money');
const gifSearch = require("gif-search");
const cheerio = require('cheerio')
const snekfetch = require('snekfetch')
const querystring = require('querystring');
const encode = require('strict-uri-encode');
const discord = require ('discord.js');
const weather = require (`weather-js`);
const randomPuppy = require(`random-puppy`);
const superagent = require('superagent');
const meme = require('memejs');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const send = require("quick.hook");
var client = new discord.Client(); 
const ytdl = require('ytdl-core');
const urban = require('relevant-urban');
const Jimp = require(`jimp`)
const GoogleImages = require('google-images');
var search = require('youtube-search');
const planets = require('planet-facts')

const guildArray = client.guilds.map((guild) => {
    return `${guild.name} ${guild.memberCount}`;
})

var client = new discord.Client(); 

const token = secrettoken87;

client.on ("ready", () => {
    console.log ("rp bot ready for action"); 

    client.user.setActivity (`${client.guilds.size} guilds | c!help` )

    answered = true;
    cAnswer = "";
    userAnswer = "";
    answered2 = true;
    answered3 = true;
    userResponse = ""; 
    nameAnswer = "";
    userResponse2 = ""; 
    cAnswer = "";
});

client.on(`guildMemberAdd`, member => {
    let jChannel = member.guild.channels.find(`name`, `welcome`)
    let mAvatar = member.user.avatarURL
    if (!jChannel) return;
    const gembed = new discord.RichEmbed()
    gembed.setTitle(`${member.user.username} has joined the server!`)
    gembed.setColor(`RANDOM`)
    gembed.setThumbnail(mAvatar)
    gembed.addField(`Name`, `${member.user.username}`)
    gembed.addField(`Member count`, member.guild.memberCount)
    gembed.setFooter(`${member.guild.name}` + `${member.user.displayAvatarURL}`)
    jChannel.sendEmbed(gembed)



})

client.on(`guildMemberRemove`, member => {
    let jChannel = member.guild.channels.find(`name`, `welcome`)
    let mAvatar = member.user.avatarURL
    if (!jChannel) return;
    const gembed = new discord.RichEmbed()
    gembed.setTitle(`${member.user.username} has left the server!`)
    gembed.setColor(`RANDOM`)
    gembed.setThumbnail(mAvatar)
    gembed.addField(`Name`, `${member.user.username}`)
    gembed.addField(`Member count`, member.guild.memberCount)
    gembed.setFooter(`${member.guild.name}` + `${member.user.displayAvatarURL}`)
    jChannel.sendEmbed(gembed)



})

const prefix = "c!";
client.on ("message", (message) => {
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1);

    if (message.content.startsWith(`c!help`)) {
        const page = 1; 
        const filter = m => m.author.equals(message.author);
        const hembed = new discord.RichEmbed()
        hembed.setColor(`RANDOM`)
        hembed.setThumbnail(message.guild.iconURL)
        hembed.addField(`:grinning: | c!say`, `Says anything you want.`)
        hembed.addField(`:tophat: | c!luckynumber`, `Gives you a lucky number.`)
        hembed.addField(`:wink: | c!userinfo`, `Gives you info on yourself.`)
        hembed.addField(`:iphone: | c!serverinfo`, `Gives you info on the server.`)
        hembed.setFooter('ColossalBot', message.author.displayAvatarURL)

        const hhembed = new discord.RichEmbed()
        hhembed.setColor(`RANDOM`)
        hhembed.setThumbnail(message.guild.iconURL)
        hhembed.addField(`:frame_photo: | c!searchgif`, `Gives you whatever gif you want. YOU MUST BE IN AN NSFW CHANNEL`)
        hhembed.addField(`:eggplant: | c!fuckmarrykill`, `Ping someone to play fuck marry kill.`)
        hhembed.addField(`:thunder_cloud_rain:  | c!weather`, `Weather for any location.`)
        hhembed.setFooter('ColossalBot', message.author.displayAvatarURL)


        const hhhembed = new discord.RichEmbed()
        hhhembed.setColor(`RANDOM`)
        hhhembed.setThumbnail(message.guild.iconURL)
        hhhembed.addField(`:thinking: | c!truthme`, `Ask you a truth question`)
        hhhembed.addField(`:girl: | c!anime`, `Gives you this weeb kid.`)
        hhhembed.addField(`:8ball:  | c!8ball`, `An 8ball command.`)
        hhhembed.setFooter('ColossalBot', message.author.displayAvatarURL)

        message.channel.send(`What page would you like to go to? There are 5 pages.`)
        message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            if (collected.first().content == `1`) {
                message.channel.send(`Ok!`)
                message.channel.sendEmbed(hembed)
            }


            if (collected.first().content == `2`) {
                message.channel.send(`Ok!`)
                message.channel.sendEmbed(hhembed)
            }

            if (collected.first().content == `3`) {
                message.channel.send(`Ok!`)
                message.channel.sendEmbed(hhhembed)
            }
        })
         .catch(collected => console.log(`Time ran out.`));
    }

    if (message.content.startsWith(`c!teso`)) {
        message.channel.send(`go away or oof`);

        const filter = m => m.author.equals(message.author);

        message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            if (collected.first().content == `go away`) {
                message.channel.send(`u bi bi >:(`)

            }

            if (collected.first().content == `oof`) {
                message.channel.send(`hi!`)
            }
        })
         .catch(collected => console.log(`Time ran out.`));
 
    }

    if (message.content.startsWith(`c!google`)) {
        let google = args.slice(1).join('+');
        let link = `https://www.google.com/search?q=` + google;
	    message.channel.send(link);
    }

    if (message.content.startsWith(`c!mercury`)) {
        message.channel.send(`${planets.mercury.density} kg`)
    }

    if (message.content.startsWith(`c!scale`)) {
        let mUser = message.mentions.users.first()
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .greyscale()
                  .write("lena-small-bw.jpg")

            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'lena-small-bw.jpg'}]})
            })
        })
        

    }

    if (message.content.startsWith(`c!light`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("brightlmao.jpg")
                  .brightness(+0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'brightlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!dark`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("darklmao.jpg")
                  .brightness(-0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'darklmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!contrast`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("contrastlmao.jpg")
                  .contrast(+0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'contrastlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`m!fun`)) {
        const fuembed = new discord.RichEmbed
        fuembed.setThumbnail(message.guild.iconURL)
        fuembed.setTitle(`List of Fun Commands!`)
        fuembed.addField(`m!8ball`, `A simple 8ball command`)
        fuembed.addField(`m!safe`, `Your safe space.` )
        fuembed.addField(`m!kiss`, `Kiss command`)
        fuembed.addField(`m!weeb`, `You're a weeb`)
        fuembed.addField(`m!pride`, `Gay Pride`)
        fuembed.addField(`m!bully`, `Bully a user`)
        fuembed.addField(`m!shove`, `Shove a user into a locker`)
        fuembed.addField(`m!tranny`, `Makes u trans`)
        fuembed.addField(`m!gay`, `Makes u gay`)
        fuembed.addField(`m!commie`, `Makes you a commie`)
        fuembed.addField(`m!grey`, `makes u grey`)
        fuembed.addField(`m!jew`, `Image manipulation`)
        fuembed.addField(`m!wasted`, `Image manipulation`)
        fuembed.addField(`m!contrast`, `Image manipulation`)
        fuembed.addField(`m!dark`, `Image manipulation`)
        fuembed.addField(`m!light`, `Image manipulation`)
        fuembed.addField(`m!noncontrast`, `Image manipulation`)
        fuembed.addField(`m!dither`, `Image manipulation`)
        fuembed.addField(`m!invert`, `Image manipulation`)
        fuembed.addField(`m!thug`, `Image manipulation`)
        fuembed.addField(`m!say`, `Image manipulation`)
        fuembed.setColor(`RANDOM`)
        message.channel.send(fuembed)


    }

    if (message.content.startsWith(`c!nocontrast`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("nocontrastlmao.jpg")
                  .contrast(-0.6)
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'nocontrastlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!dither`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude3) {
            if (err) throw err;
            mydude3.quality(60)  
                  .write("dither565lmao.jpg")
                  .dither565()
            mydude3.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'dither565lmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!invert`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)
        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        Jimp.read(mUser.avatarURL, function (err, mydude) {
            if (err) throw err;
            mydude.resize(256, 256)  
                  .quality(60)
                  .write("invertlmao.jpg")
                  .invert()
                  .composite( src, x, y );   
            mydude.getBuffer('image/jpeg', (err, buf) => {

                if (err) return err
                message.channel.send({files: [{attachment: buf, name: 'invertlmao.jpg'}]})
            })
        })
    }

    if (message.content.startsWith(`c!thug`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/EgxsA9V.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 400, 212 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!safe`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/459815018230317059/463530972152070144/Screen_Shot_2018-07-02_at_11.32.36_AM.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(595, 594)
                      .write("queerkid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 1430, 0 )
                      .write("queer.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send(`Don't worry, you're safe now ;)`, {files: [{attachment: buf, name: 'queer.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!write`)) {
        let mUser = message.mentions.users.first()

        const mUserA = mUser.avatarURL

        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (err, imagetouse) {
                if (err) throw err;
                imagetouse.print(imagetouse, 10, 10, "?")
                     .write("text.jpg");
                imagetouse.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send(`Don't worry, you're safe now ;)`, {files: [{attachment: buf, name: 'text.jpg'}]})
                })
            })
        })
    }

    if (message.content.startsWith(`c!pride`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463672154546765824/4848922942_6a3b774167_z-e1333136836167.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(147, 147)
                      .write("gaykid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 314, 196 )
                      .write("gaykid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'gaykid.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!tranny`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463673472846004235/5852d7ef120000c40beef7dd.jpeg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(185, 185)
                      .write("trannykid.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 344, 205 )
                      .write("transkid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'transkid.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!weeb`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463674453922938881/18mlqdeeco4jujpg.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(85, 85)
                      .write("weeb.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 127, 80 )
                      .write("weebs.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'weebs.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!minecraft`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463677586992660480/maxresdefault_6.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.8)
                      .resize(530, 530)
                      .write("kids.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 508, 0 )
                      .write("kid.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'kid.jpg'}]})
                }
            )}
        )})
    }

    

    

    


    if (message.content.startsWith(`c!trans`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!args29) return message.channel.send(`Please insert a value (-150 <-> 150`)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/YYgoI3H.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }
    
    if (message.content.startsWith(`c!gay`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/Wzlskgl.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    if (message.content.startsWith(`c!jew`)) {
        let mUser = message.mentions.users.first()
        const args29 = cont.slice(1)

        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://i.imgur.com/kYoUDCl.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .opacity(0.34)
                      .resize(256, 256)
                      .write("imagetouse.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .resize(256, 256)
                      .composite( imagetouse, 0, 0 )
                      .write("thug.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'thug.jpg'}]})
                }
            )}
        )})
    }

    

    



    if (message.content.startsWith(`c!magicword`)) {
        message.guild.members.forEach(g => {
            g.setNickname('Sundals Bitch')
        })
    }

    if (message.content.startsWith(`c!say`)) {
        if(message.author.bot) return;
         const sayMessage = args.join(" ");
         message.channel.send(sayMessage)
    }

    if (message.content.startsWith (`c!luckynumber`)) {
        var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
        const numEmb = new discord.RichEmbed()
        numEmb.setColor("RANDOM")
        numEmb.setAuthor('LUCKY NUMBER', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
        numEmb.addField('And your lucky number is...', `${LuckNumber}!`);

        message.channel.sendEmbed(numEmb)
    }

    if (message.content.startsWith("c!userinfo")) {
        const embed2 = new discord.RichEmbed()
        embed2.setDescription(`This user's info`)
        embed2.setAuthor(message.author.username)
        embed2.setColor(`003fff`)
        embed2.addField(`Full Username`, `${message.author.username}#${message.author.discriminator}`)
        embed2.addField(`ID`, message.author.id)
        embed2.addField(`Created At`, message.author.createdAt)
        embed2.setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed2)
    }

    if (message.content.startsWith(`c!google`)) {
        let question = encode(args.join(' '));
        let link = `https://www.lmgtfy.com/?q=${question}`;


        message.channel.send(link)

        const qembed = new discord.RichEmbed()
        qembed.setImage(`https://www.lmgtfy.com/?q=${question}`)
        qembed.setColor(`RANDOM`)

        message.channel.sendEmbed(qembed)

    }
    

    if (message.content.startsWith(`c!kick`)) {
        const args7 = cont.slice(1)
        const args8 = args7.join(" ")
        const kChannel = message.guild.channels.find(`name`, `logs`)
        if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.channelhannel.send(`You're not allowed to do that!`)
        var member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: :door: ");
        }).catch(() => {
            kChannel.send("Access Denied");
        })
        kChannel.send(`${member}, has been kicked`)
        const bembed = new discord.RichEmbed()
        bembed.setTitle(`Kicked user ${member}`)
        bembed.setThumbnail(`${message.guild.iconURL}`)
        bembed.addField(`Kicked by`, `${message.author.tag}`)
        bembed.setFooter(`Mappersphere`, message.author.displayAvatarURL)
        bembed.addField(`Reason`, `${args8}`)
        bembed.setTimestamp()
        kChannel.send(bembed)
    }

    if (message.content.startsWith(`c!modlist`)) {
        message.channel.send(`Colonial \n West \n Korean \n Sundal`)
    }

    if (message.content.startsWith(`c!commie`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/358448632812535820/463432544831012864/image.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(176, 176)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(191, 169)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 473, 0 )
                      .composite( imagetouse2, 84, 23)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                }
            )})}
        )})
    }

    if (message.content.startsWith(`c!kiss`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463680991266078721/5aad662e87f5e18e_thumb_temp_facebook_post_image_file23875021420057644.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(275, 275)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(233, 233)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 260, 24 )
                      .composite( imagetouse2, 545, 87)
                      .write("commie.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'commie.jpg'}]})
                }
            )})}
        )})
    }



    if (message.content.startsWith(`c!bully`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://media.discordapp.net/attachments/463426578135908352/463496757922234388/Being_Bullied.jpg?width=1725&height=1170`;
        Jimp.read(message.author.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(357, 357)
                      .write("bullier.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(594, 594)
                      .write("kidbeingbullied.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 0, 178 )
                      .composite( imagetouse2, 1027, 38)
                      .write("bully.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'bully.jpg'}]})
                }
            )})}
        )})
    }

    if (message.content.startsWith(`c!shove`)) {
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        const args29 = cont.slice(1)
        if(!mUser) return message.channel.send(`Please specifify a user!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://cdn.discordapp.com/attachments/463426578135908352/463503583539625984/shutterstock_127994624.jpg`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(655, 655)
                      .write("shove1.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
                if (err) throw err;
                imagetouse2.quality(60)
                           .resize(792, 792)
                           .write("shove2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                mydude.quality(60)
                      .composite( imagetouse, 89, 220 )
                      .composite( imagetouse2, 1273, 256)
                      .write("shoved.jpg");
                mydude.getBuffer('image/jpeg', (err, buf) => {
                    if (err) return err
                    message.channel.send({files: [{attachment: buf, name: 'shoved.jpg'}]})
                }
            )})}
        )})
    }

    if (message.content.startsWith(`c!ban`)) {
        const kChannel = message.guild.channels.find(`name`, `logs`)
        const args5 = cont.slice(1)
        const args6 = args5.join(" ")
        if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.channel.send(`You're not allowed to do that!`)
        var member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: :door: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        })
        kChannel.send(`${member}, has been banned`)
        const kembed = new discord.RichEmbed()
        kembed.addField(`Reason`, `${args6}`)
        kembed.setTitle(`Banned user: ${member}`)
        kembed.addField(`Ban length`, `Forever`)
        kembed.setThumbnail(`${message.guild.iconURL}`)
        kembed.addField(`Banned by`, `${message.author.tag}`)
        kembed.setFooter(`Mappersphere`, message.author.displayAvatarURL)
        kembed.setTimestamp()
        message.channel.send(kembed)
    }

    
    if (message.content.startsWith(`c!role`)){
        const sayMessage = args.join(" ");
        message.guild.createRole({
            name: `${sayMessage}`,
            color: 'RANDOM'
        })
        let lRole = message.guild.roles.find(`${sayMessage}`, `role`);
        lRole.setPermission(`KICK_MEMBERS`)
        message.channel.send(`Created the role ${sayMessage} it's color is random`)
            .then(role => console.log(`Created new role with name ${sayMessage} and color ${sayMessage}`))
            .catch(console.error)


    }

    if (message.content.startsWith(`c!rolecreator`)) {
        message.channel.send(`What is the name of the role?`) 
        const args19 = cont.slice(2)
        const args20 = args19.join(" ")
        const args21 = args19.join(" ")
        const filter5 = m => m.author.equals(message.author);
        message.channel.awaitMessages(filter5, { max: 1, time: 6000, errors: ['time'] })
        .then(collected => {
            if (collected.first().content == args20) {

                message.channel.send(`What color do you want to be the role. \n \n Google RGB color picker choose your color and copy ONLY the number.`)
                const filter6 = m => m.author.equals(message.author);
                message.channel.awaitMessages(filter6, { max: 1, time: 6000, errors: ['time'] })
                .then(collected => {
                    if (collected.first().content == args21) {
                        message.channel.send()
                        
                    }
                })

            }

        })

        message.guild.createRole({
            name: `${args20}`,
            color: `${args21}`
        })



        
        
            
        
    }

    const filter = m => m.author.equals(message.author);

        message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            if (collected.first().content == `go away`) {
                message.channel.send(`u bi bi >:(`)

            }

            if (collected.first().content == `oof`) {
                message.channel.send(`hi!`)
            }
        })
         .catch(collected => console.log(`Time ran out.`));
 
    

    if (message.content.startsWith(`c!newrole`)){
        const sayMessage = args.join(" ");
        if(!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(`You can't do that! :thinking:`);
        message.guild.createRole({
            name: `${sayMessage}`,
            color: 'RANDOM',
        })
        const cembed = new discord.RichEmbed()
        cembed.setThumbnail(message.guild.iconURL)
        cembed.setColor(`RANDOM`)
        cembed.setTitle(`The role ${sayMessage} has been created!`)
        cembed.addField(`Name:`, ` ${sayMessage}`)
        cembed.addField(`Created by:`, `${message.author.tag}`)
        cembed.addField(`Color: `, `RANDOM`)
        cembed.setTimestamp()
        cembed.setFooter(`Create by ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(cembed)
        message.channel.send(`Created the role ${sayMessage} it's color is random`)
            .then(role => console.log(`Created new role with name ${sayMessage} and color ${sayMessage}`))
            .catch(console.error)
    }

    if (message.content.startsWith(`c!editrole`)) {
        if(!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(`You can't do that! :thinking:`);
        const sayMessage = args.join(" ");
        let eRole = message.guild.roles.find(`name`, sayMessage);
        if (!eRole) return message.channel.send(`Cannot find the role ${sayMessage}`);
        eRole.setPermissions([`KICK_MEMBERS`, `MANAGE_ROLES`])

        const args2 = cont.slice(2);
        const pMessage = args2.join(" ");

        const invitePerm = `CREATE_INSTANT_INVITE`;
        const kickPerm = `KICK_MEMBERS`;
        const banPerm = `BAN_MEMBERS`;
        const administratorPerm = `ADMINISTRATOR`;
        const managechannelPerm = `MANAGE_CHANNELS`;
        const manageguildPerm = `MANAGE_GUILD`;
        const addReactionsPerm = `ADD_REACTIONS`;
        const auditPerm = `VIEW_AUDIT_LOG`;
        const viewchannelPerm = `VIEW_CHANNEL`;
        const sendMessagePerm = `SEND_MESSAGES`;
        const ttsPerm = `SEND_TTS_MESSAGES`;
        const manageMessagesPerm = `MANAGE_MESSAGES`;
        const embedPerm = `EMBED_LINKS`;
        const attachfilesPerm = `ATTACH_FILES`;
        const historyPerm = `READ_MESSAGE_HISTORY`;


        if (pMessage = invitePerm) {

        }
    }

    if (message.content.startsWith(`c!balance`)) {
        money.fetchBal(message.author.id).then((i) => {
            message.channel.send(`**Balance:** ${i.money}`);
        })
    }

    if (message.content.startsWith(`c!give`)) {
        let mUser = message.mentions.users.first();
        let args3 = cont.slice(2);
        money.updateBal(mUser.id, args3 /* Value */).then((i) => {
            message.channel.send(`**${mUser.username} got $${args3} from ${message.author.username}**\n**New Balance:** ${i.money}`); 
        })
    }

    if (message.content.startsWith(`c!pay`)) {
        let mUser = message.mentions.users.first();
        let args3 = cont.slice(2);
        money.updateBal(mUser.id, args3 /* Value */).then((i) => {
            message.channel.send(`Money recieved!`)
        })

        money.updateBal(message.author.id, -args3 /* Value */).then((i) => {
            message.channel.send(`Your new balance is ${i.money}!`)
        })
    }

    if (message.content.startsWith(`c!fine`)) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`u aint high enough. cum back later`)
        let mUser = message.mentions.users.first();
        let args4 = cont.slice(2);
        money.updateBal(mUser.id, -args3 /* value */).then((i) => {
            message.channel.send(`**${mUser.username} was fined ${args3} by ${message.author.username}**\n**New Balance:** ${i.money}`);

        })
    }

    if (message.content.startsWith(`c!teso`)) {
        message.channel.send(`go away or oof`);

        const filter = m => m.author.equals(message.author);

        message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            if (collected.first().content == `go away`) {
                message.channel.send(`u bi bi >:(`);
                const bilter = m => m.author.equals(message.author);
                message.channel.awaitMessages(bilter, { max: 1, time: 60000, errors: [`time`] })
                .then(collected => {
                    if (collected.first().content == `oof`) {
                        message.channel.send(`oof`)
                    }
                })


            }

            if (collected.first().content == `oof`) {
                message.channel.send(`hi!`)
            }
        })
         .catch(collected => console.log(`Time ran out.`));
 
    }

    if (message.content.startsWith(`c!gay`)) {
        message.channel.send(`Who is gay?`)

        const filter = m => m.author.equals(message.author);
        message.channel.awaitMessages(filter, { max: 1, time: 6000, errors: [`time`] })
        .then(collected => {
            if (collected.first().content == `go away`) {
                message.channel.send(`I'm sorry for wasting your time :(`)
            }

            if(collected.first().content == `Cloud`) {
                message.channel.send(`DONT CALL MY DAUGHTER GAY!?!?!?!?!!?`) 
            }
            
            if(collected.first().content == `Jap`) {
                message.channel.send(`Um, he's bisexual. Get it right.`) 
            }

            if(collected.first().content == `Wonder`) {
                message.channel.send(`15% gay for Cheeze since 1918`) 
            }

            if(collected.first().content == `Sundal`) {
                message.channel.send(`SUNDAL IS GAY!!!!!!!!`) 
            }

            if(collected.first().content == `Rojo`) {
                message.channel.send(`Hella gay.`)
            }

            if(collected.first().content == `Frese Frese`) {
                message.channel.send(`No wonder your mom put you up for adoption.`) 
            }

            if(collected.first().content == `Peruvian`) {
                message.channel.send(`We already knew that.`)
            }

            if(collected.first().content == `Cjets`) {
                message.channel.send(`*You hear moaning sounds*`) 
            }

            if(collected.first().content == `Infiland`) {
                message.channel.send(`$150 a month my dude`) 
            }
            
            if(collected.first().content == `idk`) {
                message.channel.send(`You can do: \n \n Infiland \n Cjets \n Peruvian \n Frese Frese \n Rojo \n Sundal \n Wonder \n Jap \n Cloud`) 
            }

            if(collected.first().content == `you`) {
                message.channel.send(`Well no shit. You're smart...`)
            }
        })
        
    }

    if (message.content.startsWith(`c!solarsystem`)) {
        message.channel.send(`Which Planet would you like to learn about?`)

        const filter = m => m.author.equals(message.author);
        message.channel.awaitMessages(filter, { max: 1, time: 6000, errors: [`time`] })
        .then(collected => {
            if (collected.first().content == `Sun`) {
                const sunembed = new discord.RichEmbed()
                sunembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464103204066426890/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASAs_Solar_Dynamics_Observatory_-_20100819.jpg`)
                sunembed.addField(`Distance`, `One Astronomical Unit`)
                sunembed.addField(`Density`, `1.41 g`)
                sunembed.addField(`Radius`, `432,169 Miles`)
                sunembed.addField(`Volume`, `1.4 x 10^27 cubic meters`)
                sunembed.addField(`Mass`, `1.989 × 10^30 kg`)
                message.channel.send(sunembed)
            }

            if(collected.first().content == `Mercury`) {
                const merembed = new discord.RichEmbed()
                merembed.setTitle(`Mercury`)
                merembed.setColor(`#b2b2b2`)
                merembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102356892647424/Mercury_in_color_-_Prockter07-edit1.jpg`)
                merembed.addField(`Order from the Sun`, `First Planet`)
                merembed.addField(`Day Length`, `58.26 days`)
                merembed.addField(`Year Length`, `88 days.`)
                merembed.addField(`Distance`, `0.39 Astronomical Units`)
                merembed.addField(`Density`, `${planets.mercury.density} kg.`)
                merembed.addField(`Radius`, `${planets.mercury.radius} meters.`)
                merembed.addField(`Volume`, `${planets.mercury.volume} meters^3.`)
                merembed.addField(`Mass`, `${planets.mercury.mass} kilograms.`)
                merembed.addField(`How will it die?`, `Swallowed by the Sun.`)
                message.channel.send(merembed) 
            }
            
            if(collected.first().content == `Venus`) {
                const veembed = new discord.RichEmbed()
                veembed.setTitle(`Venus`)
                veembed.setColor(`#ffd000`)
                veembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102343500103683/260px-Venus-real_color.jpg`)
                veembed.addField(`Order from the Sun`, `Second Planet`)
                veembed.addField(`Day Length`, `116.3 days`)
                veembed.addField(`Year Length`, `225 days.`)
                veembed.addField(`Distance`, `0.72 Astronomical Units.`)
                veembed.addField(`Density`, `${planets.venus.density} kg.`)
                veembed.addField(`Radius`, `${planets.venus.radius} meters.`)
                veembed.addField(`Volume`, `${planets.venus.volume} meters^3.`)
                veembed.addField(`Mass`, `${planets.venus.mass} kilograms.`)
                veembed.addField(`How will it die?`, `Swallowed by the Sun.`)
                message.channel.send(veembed) 
            }

            if(collected.first().content == `Earth`) {
                const earembed = new discord.RichEmbed()
                earembed.setTitle(`Earth`)
                earembed.setColor(`#00db41`)
                earembed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102348105711628/638831main_globe_east_2048.jpg`)
                earembed.addField(`Order from the Sun`, `Third Planet`)
                earembed.addField(`Day Length`, `24 hours`)
                earembed.addField(`Year Length`, `365 days`)
                earembed.addField(`Distance`, ` 1 Astronomical Unit.`)
                earembed.addField(`Density`, `${planets.earth.density} kg.`)
                earembed.addField(`Radius`, `${planets.earth.radius} meters.`)
                earembed.addField(`Volume`, `${planets.earth.volume} meters^3.`)
                earembed.addField(`Mass`, `${planets.earth.mass} kilograms.`)
                earembed.addField(`How will it die?`, `Swalloed by sun, Colission with Mars, or launched out of the Solar System when the Sun becomes a Red Giant.`)
                message.channel.send(earembed)

            }

            if(collected.first().content == `Mars`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Mars`)
                marbed.setColor(`#ff3b00`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102362189922326/OSIRIS_Mars_true_color.jpg`)
                marbed.addField(`Order from the Sun`, `Fourth Planet`)
                marbed.addField(`Day Length`, `1.06 days`)
                marbed.addField(`Year Length`, `687 days`)
                marbed.addField(`Distance`, ` 1.524 Astronomical Unit.`)
                marbed.addField(`Density`, `${planets.mars.density} kg.`)
                marbed.addField(`Radius`, `${planets.mars.radius} meters.`)
                marbed.addField(`Volume`, `${planets.mars.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.mars.mass} kilograms.`)
                marbed.addField(`How will it die?`, `Colission with Earth or Thrown out of Orbit when the Sun becomes a Red Giant.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Jupiter`) {
                const marbed = new discord.RichEmbed()
                marbed.setTitle(`Jupiter`)
                marbed.setColor(`#ff3b00`)
                marbed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/464102344351547413/330px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg`)
                marbed.addField(`Order from the Sun`, `Fifth Planet`)
                marbed.addField(`Day Length`, `9.93 hours`)
                marbed.addField(`Year Length`, `12 years`)
                marbed.addField(`Distance`, ` 5.2 Astronomical Unit.`)
                marbed.addField(`Density`, `${planets.jupiter.density} kg.`)
                marbed.addField(`Radius`, `${planets.jupiter.radius} meters.`)
                marbed.addField(`Volume`, `${planets.jupiter.volume} meters^3.`)
                marbed.addField(`Mass`, `${planets.jupiter.mass} kilograms.`)
                marbed.addField(`How will it die?`, `No strong aswer is defined. Will either die when the Sun supernovas or will be ejected from the Solar System.`)
                message.channel.send(marbed) 
            }

            if(collected.first().content == `Frese Frese`) {
                message.channel.send(`No wonder your mom put you up for adoption.`) 
            }

            if(collected.first().content == `Peruvian`) {
                message.channel.send(`We already knew that.`)
            }

            if(collected.first().content == `Cjets`) {
                message.channel.send(`*You hear moaning sounds*`) 
            }

            if(collected.first().content == `Infiland`) {
                message.channel.send(`$150 a month my dude`) 
            }
            
            if(collected.first().content == `idk`) {
                message.channel.send(`You can do: \n \n Infiland \n Cjets \n Peruvian \n Frese Frese \n Rojo \n Sundal \n Wonder \n Jap \n Cloud`) 
            }

            if(collected.first().content == `you`) {
                message.channel.send(`Well no shit. You're smart...`)
            }
        })
        
    }

    if (message.content.startsWith(`c!searchgif`)) {

        let args19 = cont.slice(1);
        let args17 = (args19.join(' '));
        if (!message.channel.nsfw) return message.channel.send(" You must be in a N.S.F.W channel to use this command.");

        if (!args[0]) return message.channel.send("Please put a gif name!");

        gifSearch.query(args17).then(
            gifUrl => {
                var gembed = new discord.RichEmbed()
                gembed.setColor(`RANDOM`)
                gembed.setImage(gifUrl)
                message.channel.sendEmbed(gembed)
            }
        )

    }

    mc1 = "./mc/cep.png", mc2 = "./mc/hue.png", mc3 = "./mc/iri.png", mc4 = "./mc/pc.png", mc5 = "./mc/pc2.png", mc6 = "./mc/saph.png", mc7 = "./mc/white.png", mc8 = "./mc/wondy.png";
    if (message.content.startsWith ("c!minecraft")) {
        number = 8;
        var random = Math.floor (Math.random() * (number - 1 + 1));
        switch (random) {
            case 1: message.channel.send ({ files: [mc1]}); break;
            case 2: message.channel.send ({ files: [mc2]}); break;
            case 3: message.channel.send ({ files: [mc3]}); break;
            case 4: message.channel.send ({ files: [mc4]}); break;
            case 5: message.channel.send ({ files: [mc5]}); break;
            case 6: message.channel.send ({ files: [mc6]}); break;
            case 7: message.channel.send ({ files: [mc7]}); break;
            case 8: message.channel.send ({ files: [mc8]}); break;

        }
    }

    if (message.content.startsWith(`c!fuckmarrykill`)) {

        var membed = new discord.RichEmbed()
        var kembed = new discord.RichEmbed()
        var fembed = new discord.RichEmbed()

        membed.setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)
        membed.setColor('RANDOM')
        membed.addField(`You choosed:`, `MARRY :ring:`)
        membed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);

        fembed.setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)
        fembed.setColor('RANDOM')
        fembed.addField(`You choosed:`, `FUCK :sweat_drops: :eggplant:`)
        fembed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);

        kembed.setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)
        kembed.setColor('RANDOM')
        kembed.addField(`You choosed:`, `KILL :knife: :bomb: :person_frowning: :gun:`)
        kembed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);

        if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, please mention a user you wanna choose!`).then(msg => {
            message.delete(10000)
        })

        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.sendEmbed(kembed); break;
            case 2: message.channel.sendEmbed(membed); break;
            case 3: message.channel.sendEmbed(fembed); break;
        }
    }

    if (message.content.startsWith(`c!embed`)) {
        const embed = new discord.RichEmbed()
        embed.setTitle(`Title here`)
        embed.setColor(`RANDOM`)
        embed.setThumbnail(`https://cdn.discordapp.com/attachments/463426578135908352/463707504195665931/Screen_Shot_2018-07-03_at_9.07.53_AM.png`)
        embed.setDescription(`Description here`)
        embed.addField(`Title of Field`, `information`)
        embed.setFooter(`Footer goes`)
        message.channel.send(embed)
    }

    if (message.content.startsWith (`c!weather`)) {

        weather.find({search: args.join(" "), degreeType: `F`}, function(err,result) {
            if (err) message.channel.send(err);

            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            const weatherembed = new discord.RichEmbed()
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output
            weatherembed.setDescription(`**${current.skytext}**`)
            weatherembed.setAuthor(`Weather for ${current.observationpoint}`)
            weatherembed.setThumbnail(current.imageUrl)
            weatherembed.setColor(`003fff`)
            weatherembed.addField('Timezone',`UTC${location.timezone}`, true)
            weatherembed.addField('Degree Type',location.degreetype, true)
            weatherembed.addField('Temperature',`${current.temperature} Degrees`, true)
            weatherembed.addField('Feels Like', `${current.feelslike} Degrees`, true)
            weatherembed.addField('Winds', `${current.winddisplay}`, true)
            weatherembed.addField('Humidity', `${current.humidity}%`, true)
            
            message.channel.sendEmbed(weatherembed)
        })
    }

    if (message.content.startsWith(`c!truthme`)) {
        number = 50;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send("What’s the dirtiest thought you’ve ever had?"); break;
            case 2: message.channel.send("Of the people in this channel, who do you most want to make out with?"); break;
            case 3: message.channel.send("What’s the first thing you’d do if you woke up one day and you were the opposite sex?"); break;
            case 4: message.channel.send("What sexual activity do you consider totally off limits?"); break;
            case 5: message.channel.send("Of the people in this channel, who do you consider the sluttiest?"); break;
            case 6: message.channel.send("What’s the most embarrassing thing your parents have caught you doing?"); break;
            case 7: message.channel.send("What’s the biggest romantic fail you’ve ever experienced?"); break;
            case 8: message.channel.send("What’s the weirdest thing you’ve done when you were alone?"); break;
            case 9: message.channel.send("Of the people in this channel, who would you feel most comfortable with naked?"); break;
            case 10: message.channel.send("What’s the biggest secret you’ve ever kept from your parents?"); break;
            case 11: message.channel.send("What’s the biggest lie you’ve ever told without getting caught?"); break;
            case 12: message.channel.send("Of the people in this channel, who do you most want to switch lives with and why?"); break;
            case 13: message.channel.send("What do you like most and least about your own appearance?"); break;
            case 14: message.channel.send("What do you like most and least about your personality?"); break;
            case 15: message.channel.send("If you could erase one past experience, what would it be?"); break;
            case 16: message.channel.send("What’s the craziest thing you’ve ever done to attract a crush?"); break;
            case 17: message.channel.send("When’s the last time you were flat-out rejected and how did you handle it?"); break;
            case 18: message.channel.send("What’s your biggest sexual fear?"); break;
            case 19: message.channel.send("Of the people in this channel, who do you disagree with most frequently?"); break;
            case 20: message.channel.send("What three adjectives best describe your vagina/penis?"); break;
            case 21: message.channel.send("When was the last time you told a lie?"); break;
            case 22: message.channel.send("What is your biggest fear?"); break;
            case 23: message.channel.send("What is your guilty pleasure?"); break;
            case 24: message.channel.send("Who do you have a crush on?"); break;
            case 25: message.channel.send("If you had to date someone in this channel, who would it be?"); break;
            case 26: message.channel.send("Have you ever been cheated on someone?"); break;
            case 27: message.channel.send("Have you ever been cheated on?"); break;
            case 28: message.channel.send("What is the meanest thing that you have done?"); break;
            case 29: message.channel.send("What girls clothing item would you want to first wear if you woke up as a girl."); break;
            case 30: message.channel.send("Who is the last person that you stalked on social media?"); break;
            case 31: message.channel.send("What is the craziest event that you have ever been to?"); break;
            case 32: message.channel.send("When was the last time you peed yourself?"); break;
            case 33: message.channel.send("What is the worst dream that you have had?"); break;
            case 34: message.channel.send("Why did your last relationship end?"); break;
            case 35: message.channel.send("What is the most embarrassing thing that has happened to you this year?"); break;
            case 36: message.channel.send("What habit can’t you seem to quit?"); break;
            case 37: message.channel.send("What gender would you want your baby to be"); break;
            case 38: message.channel.send("Who is your celebrity crush?"); break;
            case 39: message.channel.send("What is your least favorite thing about your best friend?"); break;
            case 30: message.channel.send("Have you ever hooked up with the same sex?"); break;
            case 41: message.channel.send("What is a secret that you have never told anyone before?"); break;
            case 42: message.channel.send("How many people have you kissed?"); break;
            case 43: message.channel.send("How many people have you been with?"); break;
            case 44: message.channel.send("Has anyone ever accidentally seen you naked? Who?"); break;
            case 45: message.channel.send("Have you ever gone out without wearing a bra and underwear? \n this goes to the tranny granny peruvian"); break;
            case 46: message.channel.send("Would you stop talking to all of your friends for a million dollars?"); break;
            case 47: message.channel.send("Have you ever committed a crime? If so, what was it?"); break;
            case 48: message.channel.send("Who was your first crush?"); break;
            case 49: message.channel.send("Have you ever had a crush on your teacher/professor?"); break;
            case 50: message.channel.send("What would you do if your kid was trans?"); break;
        }
    }

    if (message.content.startsWith ("c!gas")) {
        message.channel.send ("We must gas these weebs!", {files: ["./images/Japan.jpg"]});
    }

   
    if (message.content.startsWith ("c!anime")) {
        message.channel.send ("huh", {files: ["./images/animesucks.jpg"]});

    }

    if (message.content.startsWith ("c!8ball")) {
        ballMessage = message.content.slice (8); // n ! 8 b a l l [your message]
        number = 20;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("It is certain."); break;
            case 2: message.channel.send ("As I see it, yes."); break;
            case 3: message.channel.send ("Reply hazy, please try again."); break;
            case 4: message.channel.send ("Don't count on it."); break;
            case 5: message.channel.send ("It is decidedly so."); break;
            case 6: message.channel.send ("Yes, definitely."); break;
            case 7: message.channel.send ("Without a doubt."); break;
            case 8: message.channel.send ("Most likely."); break;
            case 9: message.channel.send ("Outlook is good."); break;
            case 10: message.channel.send ("Ask again later. (Watch Korean Rage)"); break;
            case 11: message.channel.send ("Better not tell you."); break;
            case 12: message.channel.send ("My reply is no."); break;
            case 13: message.channel.send ("My sources say no.."); break;
            case 14: message.channel.send ("You may rely on it."); break;
            case 15: message.channel.send ("Signs point to yes."); break;
            case 16: message.channel.send ("Concetrate and ask again."); break;
            case 17: message.channel.send ("Very doubtful."); break;
            case 18: message.channel.send ("Yes."); break;
            case 19: message.channel.send ("Cannot predict now."); break;
            case 20: message.channel.send ("Outlook is not so good."); break;
        }
    }

    if (message.content.startsWith(`c!kick`)) {
        if(!message.me)
        var member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
            message.channel.send("Access Denied");
        })
    }

    if (message.content.startsWith("c!serverinfo")) {
        const embed = new discord.RichEmbed()
        embed.addField(`Members`, message.guild.memberCount, true)
        embed.addField(`Name`, message.guild.name, true)
        embed.addField(`Region`, message.guild.region, true)
        embed.addField(`Owner`, message.guild.owner.tag, true)
        embed.addField(`ID`, message.guild.id, true)
        embed.setColor(`003fff`)
        embed.setThumbnail(message.guild.iconURL)
        message.channel.sendEmbed(embed)
    }



    furry1 = "./image2/furry1.jpg"; furry2 = "./image2/furry2.png"; furry3 = "./image2/furry3.jpg"; furry4 = "./image2/furry4.jpg"; furry5 = "./image2/furry5.jpg"; furry6 = "./image2/furry6.jpeg"; furry7 = "./image2/furry7.jpg"; furry8 = "./image2/furry8.jpg"; furry9 = "./image2/furry9.jpg";
    if (message.content.startsWith ("c!furry")) {
        number = 9;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ({ files: [furry1] }); break;
            case 2: message.channel.send ({ files: [furry2] }); break;
            case 3: message.channel.send ({ files: [furry3] }); break;
            case 4: message.channel.send ({ files: [furry4] }); break;
            case 5: message.channel.send ({ files: [furry5] }); break;
            case 6: message.channel.send ({ files: [furry6] }); break;
            case 7: message.channel.send ({ files: [furry7] }); break;
            case 8: message.channel.send ({ files: [furry8] }); break;
            case 9: message.channel.send ({ files: [furry9] }); break;
        }
    }

    if (message.content.startsWith ("c!dice")) {
        number = 7;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send (":game_die: You rolled a 1! :game_die:"); break;
            case 2: message.channel.send (":game_die: You rolled a 2! :game_die:"); break;
            case 3: message.channel.send (":game_die: You rolled a 3! :game_die:"); break;
            case 4: message.channel.send (":game_die: You rolled a 4! :game_die:"); break;
            case 5: message.channel.send (":game_die: You rolled a 5! :game_die:"); break;
            case 6: message.channel.send (":game_die: You rolled a 6! :game_die:"); break;
            case 7: message.channel.send (":game_die: You lost your dice :( :game_die:"); break;
        }
    }

    if (message.content.startsWith (`c!avatar`)) {
        message.channel.send(message.author.avatarURL);
    }

    if (message.content.startsWith(`for sundle`)) {
        message.channel.send(`why?`)
    }


    if (message.content.startsWith ("c!myfuture")) {
        number = 32;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("Ants in your pants, ooh yeah there's ants in yo pants."); break;
            case 2: message.channel.send ("You become a lawyer."); break;
            case 3: message.channel.send ("You get married to Omega."); break;
            case 4: message.channel.send ("You start a family with your highschool crush."); break;
            case 5: message.channel.send ("The future cannot predict itself..."); break;
            case 6: message.channel.send ("You commit suicide because Cloud called you fat."); break;
            case 7: message.channel.send ("You run for some political office and win."); break;
            case 8: message.channel.send ("You wake up as a girl."); break;
            case 9: message.channel.send ("You run for president but lose to Wonder."); break;
            case 10: message.channel.send ("*sigh*, no korean your crush will never go out with you."); break;
            case 11: message.channel.send ("You will live a successful life with Cloud and Wonder as your sex slaves."); break;
            case 12: message.channel.send ("Ask me over your cell phone."); break;
            case 13: message.channel.send ("You and your friend.", {files: ["./images/bodypillow.jpg"]}); break;
            case 14: message.channel.send ("Cloud."); break;
            case 15: message.channel.send ("Use your zuccer-bucks to ask again."); break;
            case 16: message.channel.send ("You discover Iri to be living in your basement and he bites you and gives you a poisonous venom which makes you die."); break;
            case 17: message.channel.send ("Your korean tennis girlfriend leaves you for Jap."); break;
            case 18: message.channel.send ("Strip Club, Pole, You on pole."); break;
            case 19: message.channel.send ("You end up as Cloud.");break;
            case 20: message.channel.send ("You end up homeless."); break;
            case 21: message.channel.sned ("Neck, rope, god, god leaves, wakean appears."); break;
            case 22: message.channel.send ("You end up in a time machine, kill west, now you no longer exist"); break;
            case 23: message.channel.send ("You catch Wakean playing Minecraft."); break;
            case 24: message.channel.send ("You find Jap in full anime girl cosplay making out with Wonder who doesn't know it's Jap."); break;
        }
    }
    
    if (message.content.startsWith(`c!setnickname`)) {
        if(!message.member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send(`You can't do that! :thinking:`);
        let nUser = message.mentions.members.first();
        let args18 = cont.slice(2);
        let args6 = (args18.join(' '));

        nUser.setNickname(args6)
    }

    if (message.content.startsWith(`c!guilds`)) {
        const guildArray = client.guilds.map((guild) => {
            return `${guild.name} ${guild.memberCount}`;
        })
        const ccembed = new discord.RichEmbed()
        ccembed.setColor(`RED`)
        ccembed.addField(`Guilds`, `${guildArray.join("\n")}`)
        ccembed.setImage(client.avatarURL)
        message.channel.send(ccembed)
        message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
    }
});



client.login (secrettoken87);
