const nbaData = {
    "Atlanta Hawks": {
        "protected": ["Jalen Johnson", "Zaccharie Risacher", "Dyson Daniels", "Onyeka Okongwu", "Nickeil Alexander-Walker", "CJ McCollum", "Jonathan Kuminga", "Asa Newell"],
        "unprotected": ["Jock Landale", "Gabe Vincent", "Buddy Hield", "Larry Nance Jr.", "Corey Kispert"]
    },
    "Boston Celtics": {
        "protected": ["Jaylen Brown", "Derrick White", "Payton Pritchard", "Sam Hauser", "Baylor Scheierman", "Neemias Queta", "Nikola Vucevic", "Luka Garza"],
        "unprotected": ["Jayson Tatum", "Jordan Walsh", "Al Horford", "Xavier Tillman", "Luke Kornet"]
    },
    "Brooklyn Nets": {
        "protected": ["Michael Porter Jr.", "Nic Claxton", "Noah Clowney", "Egor Demin", "Nolan Traore", "Dariq Whitehead", "Ziaire Williams", "Drake Powell"],
        "unprotected": ["Ochai Agbaji", "Terance Mann", "Day'Ron Sharpe", "Jalen Wilson", "Ben Saraf"]
    },
    "Charlotte Hornets": {
        "protected": ["LaMelo Ball", "Brandon Miller", "Coby White", "Kon Knueppel", "Miles Bridges", "Mark Williams", "Tidjane Salaun", "Grant Williams"],
        "unprotected": ["Mike Conley", "Josh Green", "Tre Mann", "Sion James", "Ryan Kalkbrenner"]
    },
    "Chicago Bulls": {
        "protected": ["Anfernee Simons", "Jaden Ivey", "Rob Dillingham", "Matas Buzelis", "Josh Giddey", "Patrick Williams", "Jalen Smith", "Guerschon Yabusele"],
        "unprotected": ["Collin Sexton", "Nick Richards", "Tre Jones", "Yuki Kawamura", "Mac McClung"]
    },
    "Cleveland Cavaliers": {
        "protected": ["Donovan Mitchell", "James Harden", "Evan Mobley", "Jarrett Allen", "Keon Ellis", "Jaylon Tyson", "Dean Wade", "Tyrese Proctor"],
        "unprotected": ["Dennis Schroder", "Max Strus", "Sam Merrill", "Thomas Bryant", "Nae'Qwan Tomlin"]
    },
    "Dallas Mavericks": {
        "protected": ["Cooper Flagg", "Kyrie Irving", "Dereck Lively II", "P.J. Washington", "Daniel Gafford", "Klay Thompson", "Naji Marshall", "Marvin Bagley III"],
        "unprotected": ["Tyus Jones", "Khris Middleton", "Quentin Grimes", "Jaden Hardy", "Dwight Powell"]
    },
    "Denver Nuggets": {
        "protected": ["Nikola Jokic", "Jamal Murray", "Aaron Gordon", "Christian Braun", "Peyton Watson", "DaRon Holmes II", "Julian Strawther", "Tamar Bates"],
        "unprotected": ["Jonas Valanciunas", "Cameron Johnson", "Bruce Brown", "Russell Westbrook", "Dario Saric"]
    },
    "Detroit Pistons": {
        "protected": ["Cade Cunningham", "Ausar Thompson", "Ron Holland II", "Jalen Duren", "Tobias Harris", "Isaiah Stewart", "Kevin Huerter", "Marcus Sasser"],
        "unprotected": ["Duncan Robinson", "Caris LeVert", "Paul Reed", "Daniss Jenkins", "Timmy Allen"]
    },
    "Golden State Warriors": {
        "protected": ["Stephen Curry", "Brandin Podziemski", "Kristaps Porzingis", "Moses Moody", "De'Anthony Melton", "Gui Santos", "Pat Spencer", "Quinten Post"],
        "unprotected": ["Draymond Green", "Jimmy Butler", "Gary Payton II", "Kevon Looney", "Lindy Waters III"]
    },
    "Houston Rockets": {
        "protected": ["Alperen Sengun", "Kevin Durant", "Amen Thompson", "Reed Sheppard", "Tari Eason", "Jabari Smith Jr.", "Cam Whitmore", "Fred VanVleet"],
        "unprotected": ["Dillon Brooks", "Steven Adams", "Clint Capela", "Dorian Finney-Smith", "Jeff Green"]
    },
    "Indiana Pacers": {
        "protected": ["Tyrese Haliburton", "Pascal Siakam", "Ivica Zubac", "Andrew Nembhard", "Aaron Nesmith", "Jarace Walker", "Ben Sheppard", "Johnny Furphy"],
        "unprotected": ["T.J. McConnell", "Isaiah Jackson", "Obi Toppin", "Quenton Jackson", "Kam Jones"]
    },
    "LA Clippers": {
        "protected": ["Darius Garland", "Bennedict Mathurin", "Kawhi Leonard", "Brook Lopez", "Bradley Beal", "Bogdan Bogdanovic", "Nicolas Batum", "Cam Christie"],
        "unprotected": ["Dalano Banton", "Mo Bamba", "Kevin Porter Jr.", "Amir Coffey", "Terance Mann"]
    },
    "LA Lakers": {
        "protected": ["Luka Doncic", "LeBron James", "Austin Reaves", "Deandre Ayton", "Dalton Knecht", "Max Christie", "Jarred Vanderbilt", "Luke Kennard"],
        "unprotected": ["Marcus Smart", "Rui Hachimura", "Jaxson Hayes", "Christian Wood", "Bronny James"]
    },
    "Memphis Grizzlies": {
        "protected": ["Ja Morant", "Desmond Bane", "Zach Edey", "Jalen Suggs", "Franz Wagner", "Paolo Banchero", "GG Jackson", "Santi Aldama"],
        "unprotected": ["Jaren Jackson Jr.", "Brandon Clarke", "Vince Williams Jr.", "John Konchar", "Jake LaRavia"]
    },
    "Miami Heat": {
        "protected": ["Bam Adebayo", "Davion Mitchell", "Pelle Larsson", "Kel'el Ware", "Jaime Jaquez Jr.", "Andrew Wiggins", "Kasparas Jakucionis", "Nikola Jovic"],
        "unprotected": ["Tyler Herro", "Dru Smith", "Keshad Johnson", "Josh Richardson", "Kevin Love"]
    },
    "Milwaukee Bucks": {
        "protected": ["Giannis Antetokounmpo", "Damian Lillard", "Bobby Portis", "Gary Trent Jr.", "AJ Green", "Ousmane Dieng", "Nigel Hayes-Davis", "Andre Jackson Jr."],
        "unprotected": ["Khris Middleton", "Pat Connaughton", "Delon Wright", "Taurean Prince", "Thanasis Antetokounmpo"]
    },
    "Minnesota Timberwolves": {
        "protected": ["Anthony Edwards", "Jaden McDaniels", "Julius Randle", "Naz Reid", "Rudy Gobert", "Donte DiVincenzo", "Ayo Dosunmu", "Joan Beringer"],
        "unprotected": ["Joe Ingles", "Bones Hyland", "Julian Phillips", "Terrence Shannon Jr.", "Jaylen Clark"]
    },
    "New Orleans Pelicans": {
        "protected": ["Zion Williamson", "Brandon Ingram", "Trey Murphy III", "Herb Jones", "Dejounte Murray", "Jordan Hawkins", "Yves Missi", "Derik Queen"],
        "unprotected": ["CJ McCollum", "Daniel Theis", "Jose Alvarado", "Javonte Green", "Jeremiah Robinson-Earl"]
    },
    "New York Knicks": {
        "protected": ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Mikal Bridges", "Josh Hart", "Miles McBride", "Jose Alvarado", "Tyler Kolek"],
        "unprotected": ["Mitchell Robinson", "Precious Achiuwa", "Jericho Sims", "Landry Shamet", "Jordan Clarkson"]
    },
    "Oklahoma City Thunder": {
        "protected": ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams", "Isaiah Hartenstein", "Cason Wallace", "Luguentz Dort", "Alex Caruso", "Jared McCain"],
        "unprotected": ["Aaron Wiggins", "Isaiah Joe", "Jaylin Williams", "Kenrich Williams", "Ousmane Dieng"]
    },
    "Orlando Magic": {
        "protected": ["Paolo Banchero", "Franz Wagner", "Jalen Suggs", "Desmond Bane", "Jonathan Isaac", "Anthony Black", "Tristan da Silva", "Wendell Carter Jr."],
        "unprotected": ["Goga Bitadze", "Moritz Wagner", "Gary Harris", "Caleb Houstan", "Cole Anthony"]
    },
    "Philadelphia 76ers": {
        "protected": ["Joel Embiid", "Tyrese Maxey", "VJ Edgecombe", "Caleb Martin", "Kelly Oubre Jr.", "Dominick Barlow", "Andre Drummond", "Jared McCain"],
        "unprotected": ["Paul George", "Kyle Lowry", "Adem Bona", "KJ Martin", "Reggie Jackson"]
    },
    "Phoenix Suns": {
        "protected": ["Devin Booker", "Kevin Durant", "Bradley Beal", "Tyus Jones", "Grayson Allen", "Royce O'Neale", "Ryan Dunn", "Cole Anthony"],
        "unprotected": ["Jusuf Nurkic", "Mason Plumlee", "Monte Morris", "Josh Okogie", "Bol Bol"]
    },
    "Portland Trail Blazers": {
        "protected": ["Scoot Henderson", "Shaedon Sharpe", "Donovan Clingan", "Deni Avdija", "Toumani Camara", "Yang Hansen", "Anfernee Simons", "Jerami Grant"],
        "unprotected": ["Robert Williams III", "Deandre Ayton", "Matisse Thybulle", "Duop Reath", "Kris Murray"]
    },
    "Sacramento Kings": {
        "protected": ["De'Aaron Fox", "Domantas Sabonis", "Keegan Murray", "De'Andre Hunter", "Malik Monk", "Kevin Huerter", "Keon Ellis", "Devin Carter"],
        "unprotected": ["Precious Achiuwa", "Trey Lyles", "Alex Len", "Jordan McLaughlin", "Orlando Robinson"]
    },
    "San Antonio Spurs": {
        "protected": ["Victor Wembanyama", "Trae Young", "Stephon Castle", "Dylan Harper", "Devin Vassell", "Jeremy Sochan", "Harrison Barnes", "Tre Jones"],
        "unprotected": ["Keldon Johnson", "Bismack Biyombo", "Zach Collins", "Charles Bassey", "Julian Champagnie"]
    },
    "Toronto Raptors": {
        "protected": ["Scottie Barnes", "Immanuel Quickley", "RJ Barrett", "Brandon Ingram", "Gradey Dick", "Ja'Kobe Walter", "Jakob Poeltl", "Chris Paul"],
        "unprotected": ["Kelly Olynyk", "Davion Mitchell", "Bruce Brown", "Ochai Agbaji", "Chris Boucher"]
    },
    "Utah Jazz": {
        "protected": ["Keyonte George", "Lauri Markkanen", "Jaren Jackson Jr.", "Walker Kessler", "Ace Bailey", "Cody Williams", "Isaiah Collier", "John Collins"],
        "unprotected": ["Lonzo Ball", "Jordan Clarkson", "Patty Mills", "Svi Mykhailiuk", "Drew Eubanks"]
    },
    "Washington Wizards": {
        "protected": ["Anthony Davis", "Alex Sarr", "Bub Carrington", "Bilal Coulibaly", "Kyshawn George", "Saddiq Bey", "Jaden Hardy", "D'Angelo Russell"],
        "unprotected": ["Jordan Poole", "Malcolm Brogdon", "Kyle Kuzma", "Jonas Valanciunas", "Richaun Holmes"]
    }
};
