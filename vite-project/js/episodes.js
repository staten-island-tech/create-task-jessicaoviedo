const episodes = [
  {
    title: "Pilot",
    id: 1,
    episodenumber: 1,
    season: 1,
    description:
      "After Tori fills in for her sister in a big musical showcase, she's asked to enrol at an elite performing arts high school. But once there, she wonders if she'll ever fit in.",
  },
  {
    title: "The Bird Scene",
    id: 2,
    episodenumber: 2,
    season: 1,
    description:
      "Tori goes all out to master an iconic Hollywood Arts monologue in Sikowitz's class. Meanwhile, Andre and Robbie join a ballet class to meet girls with disastrous results.",
  },
  {
    title: "Stage Fighting",
    id: 3,
    episodenumber: 3,
    season: 1,
    description:
      "Tori has to defend herself when Jade claims Tori hurt her in a stage fighting exercise, while Trina has to fend off Robbie when he thinks their stage kiss meant something.",
  },
  {
    title: "The Birthweek Song",
    id: 4,
    episodenumber: 4,
    season: 1,
    description:
      "Tori struggles to find the perfect birthday gift for Trina, then decides to write her a song as a present. Ungrateful Trina turns the song into cash by selling it.",
  },
  {
    title: "Jade Dumps Beck",
    id: 5,
    episodenumber: 5,
    season: 1,
    description:
      "Jade dumps Beck, then regrets it and recruits Tori to help get him back. Meanwhile, Trina puts on a one-woman show and tells Robbie to give it a good review, or else!",
  },
  {
    title: "Tori the Zombie",
    id: 6,
    episodenumber: 6,
    season: 1,
    description:
      "Tori gets the lead in a high profile school musical, but freaks out when a stage make-up project goes wrong, and she's left looking like a zombie on opening night.",
  },
  {
    title: "Robarazzi",
    id: 7,
    episodenumber: 7,
    season: 1,
    description:
      "Tori suggests Robbie get videos of students' everyday lives to increase his blog traffic. When the camera is turned on Tori, she asks him to stop, but he doesn't.",
  },
  {
    title: "Video Chat",
    id: 8,
    episodenumber: 8,
    season: 1,
    description:
      "Tori's flight home is delayed, and she is left with no time to complete a school project. She tries to get the work done over a video chat with the team, but things keep getting in her way.",
  },
  {
    title: "Beck's Big Break",
    id: 9,
    episodenumber: 9,
    season: 1,
    description:
      "Tori accidentally gets Beck fired from a small role in a movie, then must find a way to get him his job back. Meanwhile, Robbie has nightmares about Rex.",
  },
  {
    title: "The Great Ping Pong Scam",
    id: 10,
    episodenumber: 10,
    season: 1,
    description:
      "Tori discovers that her friends have been secretly going to a fancy restaurant instead of playing in an annual ping-pong tournament.",
  },
  {
    title: "Cat's New Boyfriend",
    id: 11,
    episodenumber: 11,
    season: 1,
    description:
      "When Tori finds out that Cat is dating her ex-boyfriend, her jealousy could ruin their relationship. Trina uses fish to make everyone's feet super smooth.",
  },
  {
    title: "Freak the Freak Out",
    id: 12,
    episodenumber: 12,
    season: 1,
    description:
      "Cat and Jade get banned from a karaoke bar. The boys look after Trina after her wisdom teeth are removed, while Tori helps Jade and Cat get revenge.",
  },
  {
    title: "Rex Dies",
    id: 13,
    episodenumber: 13,
    season: 1,
    description:
      "As the kids prepare for a big play, Rex is accidentally sucked into a giant fan. Robbie is a wreck and it's up to Tori to save the day by saving Rex's life.",
  },
  {
    title: "The Diddly-Bops",
    id: 14,
    episodenumber: 14,
    season: 1,
    description:
      "Sikowitz recruits the gang to form a children's band for a friend's party. When a leaked video of the group becomes popular, Andre finds it hard to be taken seriously.",
  },
  {
    title: "Wok Star",
    id: 15,
    episodenumber: 15,
    season: 1,
    description:
      "Tori helps Jade find a place to perform a play that she wrote; Ms. Li threatens to cancel the show unless Jade casts her daughter in the play.",
  },
  {
    title: "Survival of the Hottest",
    id: 16,
    episodenumber: 16,
    season: 1,
    description:
      "A heat wave hits LA and Tori and the gang decide to go to Venice Beach to cool off. However, the gang - minus Cat who left to use the bathroom - become trapped in Beck's RV when another RV is parked right next to theirs. While they are trapped, Cat is busy partying with four hot guys, completely oblivious to her friends' predicament.",
  },
  {
    title: "The Wood",
    id: 17,
    episodenumber: 17,
    season: 1,
    description:
      "The kids are excited to hear that they'll be the stars of a new reality TV show. Meanwhile, Trina and Robbie must work at The Grub Truck when Festus is injured.",
  },
  {
    title: "Sleepover at Sikowitz's",
    id: 18,
    episodenumber: 18,
    season: 1,
    description:
      "Mr Sikowitz asks the gang to have a sleepover at his house, hoping to teach them a valuable lesson in method acting.",
  },
  {
    title: "A Film by Dale Squires",
    id: 19,
    episodenumber: 19,
    season: 1,
    description:
      "When a hot young filmmaker comes to Hollywood Arts, the kids are excited to work on his project. However, when the film is released, the kids want revenge.",
  },
  {
    title: "Beggin' on Your Knees",
    id: 20,
    episodenumber: 1,
    season: 2,
    description:
      "When Tori gets the chance to work with a handsome guy on a school project, she jumps at the chance. Is she right to be suspicious that he's everything he seems?",
  },
  {
    title: "Beck falls for Tori",
    id: 21,
    episodenumber: 2,
    season: 2,
    description:
      "When Tori gets her big break acting in a Hollywood movie, she's confronted with the consequences of lying on her resume when she's asked to perform a big stunt.",
  },
  {
    title: "Ice Cream for Ke$ha",
    id: 22,
    episodenumber: 3,
    season: 2,
    description:
      "When Tori loses a bet to Trina, she tries to make it up to her. As a gift for Trina, Tori tries to win a contest where the prize is a private performance by Ke$ha.",
  },
  {
    title: "Tori Gets Stuck",
    id: 23,
    episodenumber: 4,
    season: 2,
    description:
      "Tori is excited when she gets cast as the lead in the school play, but she has to deal with her very unhappy understudy - Jade - who is intent on sabotaging the proceedings.",
  },
  {
    title: "Prom Wrecker",
    id: 24,
    episodenumber: 5,
    season: 2,
    description:
      "Tori is planning a prom, but the event ruins Jade's art project and now she's out for revenge. Can Tori throw a successful prom with Jade aiming to bring the whole dance down?",
  },
  {
    title: "Locked Up Abroad",
    id: 25,
    episodenumber: 6,
    season: 2,
    description:
      "After Tori's shoe malfunction, she is accused of assaulting the chancellor of Yerba. Sent straight to jail for her obvious crimes, there seems no way out, until some unexpected help arrives.",
  },
  {
    title: "Helen Back Again",
    id: 26,
    episodenumber: 7,
    season: 2,
    description:
      "When Principal Eikner leaves Hollywood Arts, the school hires a new principal who makes all the students re-audition in order to keep their spots. Who will get kicked out?",
  },
  {
    title: "Who Did It to Trina?",
    id: 27,
    episodenumber: 8,
    season: 2,
    description:
      "Trina stars in Tori's directorial debut, and there is a big accident on opening night. Lane wants to find out what went wrong, and if it was equipment malfunction, or sabotage.",
  },
  {
    title: "Jade Gets Crushed",
    id: 28,
    episodenumber: 9,
    season: 2,
    description:
      "Andre is working on a song with Jade, and gets a crush on her. Tori tries to help him get over it, but nothing seems to work, and Andre has trouble keeping his feelings a secret.",
  },
  {
    title: "Tori Tortures Teacher",
    id: 29,
    episodenumber: 10,
    season: 2,
    description:
      "The kids take Sikowitz to the theater to celebrate his 10-year teaching anniversary, but the play's subject matter sends Sikowitz into a deep depression. Tori must cheer him up.",
  },
  {
    title: "Terror on Cupcake Street",
    id: 30,
    episodenumber: 11,
    season: 2,
    description:
      "The kids have only a night to build and drive a float to the parade. When the float breaks down in a bad neighbourhood, can they recover and save their chance to be on TV?",
  },
  {
    title: "A Christmas Tori",
    id: 31,
    episodenumber: 12,
    season: 2,
    description:
      "It's holiday time, and the kids have to find the perfect Secret Santa gifts for each other, because whoever gives the worst gift has to go door-to-door yodelling with Sikowitz.",
  },
  {
    title: "Blooptorious",
    id: 32,
    episodenumber: 13,
    season: 2,
    description:
      "A special episode where Christopher Cane, the actor who plays Rex, is our host for an in-depth look into the stars of Victorious, and their hilarious outtakes.",
  },
  {
    title: "The Breakfast Bunch",
    id: 33,
    episodenumber: 1,
    season: 3,
    description:
      "Tori and the gang spend Saturday in detention after a lunch trip gone wrong. They have the whole day to learn about each other, find food, and try not to earn more detention.",
  },
  {
    title: "The Gorilla Club",
    id: 34,
    episodenumber: 2,
    season: 3,
    description:
      "In an effort to take more risks as an actress, Tori goes to an underground spot called `The Gorilla Club' Meanwhile, Andre and Robbie lose a very interesting bet to Jade.",
  },
  {
    title: "The Worst Couple",
    id: 35,
    episodenumber: 3,
    season: 3,
    description:
      "Jade and Beck help Sinjin with his new game show, `The Worst Couple,' but it puts their relationship to the test. Meanwhile, Tori breaks her precious Pear Phone.",
  },
  {
    title: "Andre's Horrible Girl",
    id: 36,
    episodenumber: 4,
    season: 3,
    description:
      "Tori notices some changes in her friend Andre, whose girlfriend seems to be overbearing and controlling. Meanwhile, Jade and Cat try to earn money dog-sitting in Beverly Hills.",
  },
  {
    title: "Car, Rain & Fire",
    id: 37,
    episodenumber: 5,
    season: 3,
    description:
      "When Cat's favourite actress dies, she talks Tori and Jade into driving to the actress' house to hold a vigil. Meanwhile, Trina directs a play starring herself.",
  },
  {
    title: "Tori & Jade's Play Date",
    id: 38,
    episodenumber: 6,
    season: 3,
    description:
      "Tori and Jade play a married couple putting their acting abilities and friendship to the test. Meanwhile, Cat and Robbie start a service to deliver bad news in a friendly way.",
  },
  {
    title: "April Fools Blank",
    id: 39,
    episodenumber: 7,
    season: 3,
    description:
      "When April Fools Day comes to Hollywood Arts, Tori spends her day expecting pranks and jokes, while being oblivious to a series of absurd events and crazy happenings around her.",
  },
  {
    title: "Driving Tori Crazy",
    id: 40,
    episodenumber: 8,
    season: 3,
    description:
      "When a movie shoot causes a traffic jam and extends Tori's commute, Tori attempts to find a bearable driving companion among her friends; Cat becomes addicted to a coupon service.",
  },
  {
    title: "How Trina Got In",
    id: 41,
    episodenumber: 9,
    season: 3,
    description:
      "Andre, Jade, Cat and Beck trade urban legends about how Trina got accepted into Hollywood Arts. Meanwhile, Tori and Robbie are stuck at Nozu, unable to pay their bill.",
  },
  {
    title: "Tori Goes Platinum",
    id: 42,
    episodenumber: 10,
    season: 3,
    description:
      "Tori gets to sing at a big music awards show, but the producer wants to totally change her look and behaviour. Tori agrees, but finds that she doesn't like her new image.",
  },
  {
    title: "Crazy Ponnie",
    id: 43,
    episodenumber: 11,
    season: 3,
    description:
      "A strange new student named Ponnie befriends Tori, but keeps dissapearing around other people. Everyone worries that Tori might be losing it.",
  },
  {
    title: "The Blonde Squad",
    id: 44,
    episodenumber: 12,
    season: 3,
    description:
      "While wearing a blonde wig for a film, Cat meets a boy and they quickly hit it off. When Cat realises he thinks her costume is real, she worries he won't like the real her.",
  },
  {
    title: "Wanko's Warehouse",
    id: 45,
    episodenumber: 1,
    season: 4,
    description:
      "The gang's favourite megastore is having a massive sale. To avoid a huge line of customers, the kids hide in the store until it closes so they can grab what they want before it's gone.",
  },
  {
    title: "The Hambone King",
    id: 46,
    episodenumber: 2,
    season: 4,
    description:
      "After posting a hamboning video online, Robbie is challenged for the title of Hambone King. When Robbie is beaten, Tori agrees to help Robbie avenge his defeat.",
  },
  {
    title: "Opposite Date",
    id: 47,
    episodenumber: 3,
    season: 4,
    description:
      "Tori and Beck decide to go on an `Opposite Date' where they do things that people would never do on a real date. Suspicious, Jade gets Cat to help her follow them.",
  },
  {
    title: "Three Girls and a Moose",
    id: 48,
    episodenumber: 4,
    season: 4,
    description:
      "Tori, Cat, and Jade compete with each other to win the affection of Beck's big, handsome, hockey loving Canadian friend, Moose.",
  },
  {
    title: "Cell Block",
    id: 49,
    episodenumber: 5,
    season: 4,
    description:
      "Sikowitz challenges the kids to go a week without using their phones, laptops or other portable electronic devices. The kids accept but soon realise it won't be as easy as they thought.",
  },
  {
    title: "Tori Fixes Beck and Jade",
    id: 50,
    episodenumber: 6,
    season: 4,
    description:
      "Beck wants to ask a girl out but is worried about Jade's reaction, so Tori and Andre get Jade a date too. Robbie works to remove a butterfly that is stuck in Cat's ear.",
  },
  {
    title: "One Thousand Berry Balls",
    id: 51,
    episodenumber: 7,
    season: 4,
    description:
      "Andre gets Tori a job at a yogurt stand, but work may keep them from performing at the Cowboy Luau; Robbie wants to ask Cat to the luau, but asks someone else, making Cat jealous.",
  },
  {
    title: "Robbie Sells Rex",
    id: 52,
    episodenumber: 8,
    season: 4,
    description:
      "Mason Thornesmith's bratty 12 year-old kid wants to buy Rex from Robbie. Meanwhile, a masked flour thrower is on the loose in Hollywood Arts.",
  },
  {
    title: "The Bad Roomate",
    id: 53,
    episodenumber: 9,
    season: 4,
    description:
      "Andre stays with Tori to work on a song for class, and Jade discovers an unflattering picture of herself on the Internet.",
  },
  {
    title: "Brain Squeezers",
    id: 54,
    episodenumber: 10,
    season: 4,
    description:
      "When Tori is selected to be the team captain for a new game show, she must choose three of her friends to compete with her.",
  },
  {
    title: "The Slap Fight",
    id: 55,
    episodenumber: 11,
    season: 4,
    description:
      "Tori and the gang compete to see who can get the most followers on The Slap. But when they get caught up in the competition, they neglect their schoolwork and their friendships.",
  },
  {
    title: "Star Spangled Tori",
    id: 56,
    episodenumber: 12,
    season: 4,
    description:
      "When Tori is invited to sing the national anthem at a basketball game, she worries she'll forget the lyrics, but ends up in a more embarrassing encounter with the team's mascot.",
  },
  {
    title: "Victori-Yes",
    id: 57,
    episodenumber: 13,
    season: 4,
    description:
      "Sikowitz challenges the students to say yes to everything for one week. The gang agrees, and they soon find themselves out of their respective comfort zones.",
  },
];

export { episodes };
