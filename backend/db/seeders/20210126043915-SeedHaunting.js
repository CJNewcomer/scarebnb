'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Hauntings', [
        { 
          statusId: '1',
          locationName: 'Beetlejuice House', 
          city: 'East Corinth', 
          state: 'VT', 
          country: 'United States', 
          description: 'Newly renovated by the Deets family, this modern architectural wonder will leave you saying "Beetleguise, Beetleguise, Beetleguise!"  Featuring a dining room with enough space to host a conga line, a family room with exotic plants and a roaring fireplace, and a miniature replica of the entire quaint town in Connecticut.', 
          imgPath: (['https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Beetlejuice_1.png', 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Beetlejuice_2.png', 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Beetlejuice_3.png', 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Beetlejuice_4.png', 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Beetlejuice_5.png']), 
          price: 250
        },
        { 
          statusId: '1',
          locationName: 'Buckner Mansion', 
          city: 'New Orleans', 
          state: 'LA', 
          country: 'United States', 
          description: 'Ready to practice and cast your spells? You surely can with these fellow witches and supremes, casting necromancy and herbology encantations in the great open meeting room.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Buckner_1.png', 
          price: 500
        },
        { 
          statusId: '1',
          locationName: 'Thornewood Castle', 
          city: 'Seattle', 
          state: 'WA', 
          country: 'United States', 
          description: 'Reports of a faceless figure roaming the halls at night, going in and out of the house.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Thornewood_1.png', 
          price: 800
        },
        { 
          statusId: '1',
          locationName: 'Bisham Manor', 
          city: 'LaGrange', 
          state: 'GA', 
          country: 'United States', 
          description: 'Broken-neck lady appears at the foot of your bed, some friendly spirits.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Bisham_1.png', 
          price: 250
        },
        { 
          statusId: '1',
          locationName: 'Palacio de Los Hornillos', 
          city: 'Cantabria', 
          state: '', 
          country: 'Spain', 
          description: 'Apparitions of a mother and children all around the house, shutting curtains and doors, trying to enshroud the mansion in darkness', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Palacio_1.png', 
          price: 822
        },
        { 
          statusId: '1',
          locationName: 'Allerdale Hall', 
          city: 'Guillermo', 
          state: 'British Columbia', 
          country: 'Canada', 
          description: 'A woman in a white dress wanders the halls of this Gothic mansion crying out for her lost lover.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Allerdale_1.png', 
          price: 900
        },
        { 
          statusId: '1',
          locationName: 'Cotterstock Hall', 
          city: 'Cotterstock', 
          state: 'Peterborough PE8 5HD', 
          country: 'UK', 
          description: 'Lady in black Victorian clothing weeping walks throughout the grounds.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Cotterstock_1.png', 
          price: 220
        },
        { 
          statusId: '1',
          locationName: 'Amityville House', 
          city: 'Amityville', 
          state: 'NY', 
          country: 'United States', 
          description: 'Green slime coming out cracks in walls. Figure with red eyes.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Amityville_1.png', 
          price: 250
        },
        { 
          statusId: '1',
          locationName: 'Old Arnold Estate', 
          city: 'Harrisville', 
          state: 'RI', 
          country: 'United States', 
          description: 'The witch Bathsheeba Sherman haunts this house, poking guests that fall asleep with a large sewing needle.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Conjuring_1.png', 
          price: 75
        },
        { 
          statusId: '1',
          locationName: 'Shaker Mansion', 
          city: 'Roanoke', 
          state: 'NC', 
          country: 'United States', 
          description: 'A lone indigenous spirit haunts this mansion, having ceremonies in front of the large windows and outside.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/ShakerMansion_1.png', 
          price: 200
        },
        { 
          statusId: '1',
          locationName: 'Dunsmuir House', 
          city: 'Oakland', 
          state: 'CA', 
          country: 'United States', 
          description: 'Billowing, floating figure supposedly follows you around, waiting to steal your happiness.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Dunsmuir_1.png', 
          price: 500
        },
        { 
          statusId: '1',
          locationName: 'Hatley Castle', 
          city: 'Hatley Castle', 
          state: 'British Columbia', 
          country: 'Canada', 
          description: 'Elderly man roams the halls knocking on all of the doors looking for his wife.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Hatley_1.png', 
          price: 900
        },
        { 
          statusId: '1',
          locationName: 'Murder House', 
          city: 'Los Angeles', 
          state: 'CA', 
          country: 'United States', 
          description: 'A figure dressed in black with no mouth, a moody teenager, a mother who died during childbirth, and a father who was framed all haunt this location.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/MurderHouse_1.png', 
          price: 500
        },
        { 
          statusId: '1',
          locationName: 'Gilmoure House', 
          city: 'Kalamazoo', 
          state: 'MI', 
          country: 'United States', 
          description: 'The house is over a hundred years old and used to belong to the Gilmoure family.  They were a wealthy family in the Kalamazoo area, it is said that the butler fell down the servants stair case all the way to the basement and died. There is a built in grand father clock on the second floor that always stops on the same time whenever the clock is started, supposedly the same time the butler died. Brothers that live there report the presence of "something" at night, lights have turned them selves on or off and things have been moved with no one being present.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Gilmoure_1.png', 
          price: 250
        },
        { 
          statusId: '1',
          locationName: 'Hathaway House', 
          city: 'New Baltimore', 
          state: 'MI', 
          country: 'United States', 
          description: 'This house used to be an insane asylum. Many people are said to have killed themselves while there. At night you can see these ghosts in the windows. When inside, you hear voices. Also, if you have lights they may flicker in the presence of the ghost.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Hathaway_1.png', 
          price: 100
        },
        { 
          statusId: '1',
          locationName: 'Old Lonsinger House', 
          city: 'Carnegie', 
          state: 'PA', 
          country: 'United States', 
          description: 'Reports of hearing an organ playing and seeing an apparition of a "Blue Lady." Many claim that she would knock on their door in the middle of the night saying that something was very wrong in the house though nothing was ever found out of the ordinary.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/OldLongsinger_1.png', 
          price: 100
        },
        { 
          statusId: '1',
          locationName: '"Red House"', 
          city: 'Gettysburg', 
          state: 'PA', 
          country: 'United States', 
          description: 'This large, civil war era house is always occupied by female students living off-campus, who attend Gettysburg College. There is a small grave in the backyard of the house and it belonged to a young woman who was living there during the civil war. She is said to move around the house at night, moving objects around, breaking plates, glasses, etc. The smell of her perfume, lilac, can be smelled at night when she is walking about the house.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/RedHouse_1.png', 
          price: 250
        },
        { 
          statusId: '1',
          locationName: 'Cary House', 
          city: 'Chelsea', 
          state: 'MA', 
          country: 'United States', 
          description: 'The Cary House was a mansion in the civil war. The daughter of the family had two lovers, who fought on opposing sides and ending up killing each other on the stairs inside the house. For quite a few years now, one couple would live in the house (a newer part of the house was added onto the old) and give tours.Once things started getting stolen, the tours stopped. It is said that one the night of the wedding anniversary of the Cary parents, you can hear laughter, mumbled conversation, and wine glasses clinking from the old kitchen. You constantly get the feeling of being followed or watched over. And this house has many secret passageways and hidden spots as well.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Cary_1.png', 
          price: 100
        },
        { 
          statusId: '1',
          locationName: 'Heceta Head Lighthouse', 
          city: 'Florence', 
          state: 'OR', 
          country: 'United States', 
          description: 'Many stories abound around the haunting here, the most widely heard is probably the story of an old woman who haunts the place, the wife of a lighthouse keeper. You can stay here and see for yourself, it is now a bed & breakfast.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/HecetaHead_1.png', 
          price: 150
        },
        { 
          statusId: '1',
          locationName: 'Oliver House', 
          city: 'Bisbee', 
          state: 'AZ', 
          country: 'United States', 
          description: 'This bed and breakfast is the site of a mass murder. When a husband found his wife with a man who resided here, he killed his wife and her lover. He then walked to the day room and killed whoever he came across. He left, drove to the edge of town, and then killed himself. There was also another murder, but the culprit was never found. The building is pleasant and very nostalgic. Guests that have stayed there have heard what they thought were firecrackers exploding in the hall. Later, they heard the opening and slamming of doors, with heavy footsteps going down the hall. They found out in the morning that no one else had heard any of the sounds they did, but that previous guests had reported similar events. The owner was quite helpful and knowledgeable as to who may be haunting his bed and breakfast.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Oliver_1.png', 
          price: 250
        },
        { 
          statusId: '1',
          locationName: 'Poe House', 
          city: 'Baltimore', 
          state: 'MD', 
          country: 'United States', 
          description: 'This house is haunted by a female spirit dressed in gray.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/craigdarroch_1.png', 
          price: 150
        },
        { 
          statusId: '1',
          locationName: 'The Dillinger House', 
          city: 'Sandwich', 
          state: 'ME', 
          country: 'United States', 
          description: 'Cold chills will run down your spine over and over.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Dillinger_1.png', 
          price: 150
        },
        { 
          statusId: '1',
          locationName: 'T\'Frere\'s House', 
          city: 'Lafayette', 
          state: 'LA', 
          country: 'United States', 
          description: 'There is a young woman said to haunt this Bed and Breakfast. It is one of the oldest homes in Lafayette and it is said she once lived there a hundred or so years ago. The story goes she drowned in the big barrell used to catch the rainwater that is still in place today. The story varies as to whether it was an accident or suicide. She is a friendly ghost who makes objects move, walks around upstairs at night, and moves furniture around. People say she has a comforting presence.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/TFrere_1.png', 
          price: 150
        },
        { 
          statusId: '1',
          locationName: 'Beauregard House', 
          city: 'New Orleans', 
          state: 'LA', 
          country: 'United States', 
          description: 'The Beauregard-Keyes house is known to be haunted more by Paul Munni, who was a world-class chess master, who went insane. As a matter of fact, Charles Dickenson said that Thomas Jefferson, and Paul Munni were the only two geniuses that America ever produced. In a fit of mania, Munni ran, in the nude, down Ursaline with an axe, looking to kill anyone unfortunate enough to cross his path. When not playing chess, he liked to play the piano. It is the piano, and his screaming that can be heard at night. The Beauregard-Keyes house is also the sight of a mafia massacre. It is said that in the garden, you can smell gunpowder, and sometimes you can hear shots in the garden.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Beauregard_1.png', 
          price: 150
        },
        { 
          statusId: '1',
          locationName: 'The Scott House', 
          city: 'Napoleon', 
          state: 'OH', 
          country: 'United States', 
          description: 'Built in the mid 1800\'s by Gen Robert Scott, the house has many incidents of paranormal. Gen Scott can be seen walking down the steps in his suit and top hat, levitation of people sleeping on the 3rd floor bedrooms, sounds of people walking through the hallways, cold spots, and infants waking in the middle of the night, then giggling at a misty figure above their crib. Supposedly haunted by the General and at least one female servant of his.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Scott_1.png', 
          price: 100
        },
        { 
          statusId: '1',
          locationName: 'Ivy House Inn ', 
          city: 'Casper', 
          state: 'WY', 
          country: 'United States', 
          description: 'There is a spirit of a man, who sets off the alarms in the parking lot where a house used to be. There is a lady, a former owner , who goes from room to room. Small catlike animals run down the halls and up the stairs from time to time. There are cold spots in the house. Items have eerily moved. The original 1916 house had a traveling cloud in the sitting room, but after it was torn down for parking, any car parked where the sitting room now sounds off when set, usually after 2:30 am and late in the morning. Many pictures in the house with anomalies or vortices have been taken.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Ivy_1.png', 
          price: 150
        },
        { 	
          statusId: '1',			
          locationName: 'Loudoun House', 
          city: 'Lexington', 
          state: 'KY', 
          country: 'United States', 
          description: 'Loudoun house is an 1852 Gothic Villa that was once home to the families of Francis Key Hunt and William Cassius Goodloe that is home to the Lexington Art League. A partial list of activity includes a Victorian woman who haunts the western half of the house, an apparition of a black cat, the apparition of another Victorian woman seen in the former dining room. Aroma of an antique floral perfume in one of the upstairs rooms now used as a studio, voices and distant strains of ballroom music are sometimes heard.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Loudoun_1.png', 
          price: 150
        },
        { 	
          statusId: '1',			
          locationName: 'The Dupree House (also known as Dunwich Manor)', 
          city: 'Fort Covington', 
          state: 'NY', 
          country: 'United States', 
          description: 'This old Victorian mansion, once owned by occult writer Gerina Dunwich, is known by local residents to be haunted. In the early 20th century, a mentally disturbed woman was believed to have been locked away in one of the small attic rooms. She died there, leaving bloodied hand prints on the walls and ceiling. Several coats of primer and paint were necessary to cover the stains. The room contains a cold spot and several s√©ances have been held there in an attempt to contact the restless spirit. Strange thumps have also been heard in the attic at night. Glowing lights have been seen moving through the cellar, and a ghostly presence has been felt by numerous people in the upstairs bedrooms. The carriage house (which is older than the main house and reputed to have underground tunnels leading to Canada) is also believed to be haunted. Strange moaning sounds have been heard at night coming from its second floor.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Dupree_1.png', 
          price: 150
        },
        { 	
          statusId: '1',			
          locationName: 'Old Mary Buth House', 
          city: 'Germantown', 
          state: 'WI', 
          country: 'United States', 
          description: 'A woman dressed in gothic, translucent, white clothing has been seen standing in near the house. Crying sounds coming from the upstairs bedroom have been heard.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/OldMaryButh_1.png', 
          price: 150
        },
        { 	
          statusId: '1',		
          locationName: 'Chateau Ste Michelle Winery Manor House', 
          city: 'Woodinville', 
          state: 'WA', 
          country: 'United States', 
          description: 'This beautiful winery is set up on 150 acres previously owned by Seattle lumber and dairy baron Fredrick Stimson. Although the winery itself was constructed in the mid-1970s, Mr. Stimson\'s old (early 1900s) mansion still occupies the land (manor house). Kept in its original state, the house is still used constantly for meetings and dinners. Staff at the winery for years has had paranormal experiences here. There have been many reports of cold spots that follow you, strange shadows, and noises. One of the upstairs restrooms by opening the window, closing the door, and turning the light on, and  reported hearing footsteps upstairs when no one is there. Other occurrences include lights turning on, toilets flushing by themselves, and security systems going on the fritz. There always seems to be something behind you and you get the chills right down to your bones when walking through the house alone at night. ', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/ChateauSte_1.png', 
          price: 250
        },
        { 	
          statusId: '1',			
          locationName: 'The Hare House', 
          city: 'Noblesville', 
          state: 'IN', 
          country: 'United States', 
          description: 'Another historic building on South 8th Street in Noblesville. It was owned by one of the founding families in Noblesville. The house was used for some time as a funeral parlor. It was moved and restored in a new location within the past few years. Hauntings that have been reported include "a creepy feeling when being upstairs," "a white lady with a candle on the staircase," and "a little boy who runs around, pointing and giggling at people."', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/HareHouse_1.png', 
          price: 150
        },
        { 	
          statusId: '1',			
          locationName: 'Vennum House', 
          city: 'Watseka', 
          state: 'IL', 
          country: 'United States', 
          description: 'Convinced that Vennum was a reincarnation of their daughter, the Roff family allowed the girl to live with them for several weeks. Stevens wrote that when Vennum later married, Roff\'s spirit supposedly inhabited Vennum, resulting in a painless childbirth for her.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/images/Vennum_1.png', 
          price: 100
        },
        { 
          statusId: '1',				
          locationName: 'The Warren House', 
          city: 'Jonesboro', 
          state: 'GA', 
          country: 'United States', 
          description: 'The Warren House was used as a hospital during the Civil War. While at the house many soldiers carved their names in the wall. At night a figure of a soldier can be seen holding a candle and looking out the window. There have been several reports of this. There is supposedly a bloodstain still on the floor in the attic. The confederate cemetery across the street is said to be haunted as well.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Warren_1.png', 
          price: 150
        },
        { 
          statusId: '1',				
          locationName: 'Kennesaw House', 
          city: 'Marietta', 
          state: 'GA', 
          country: 'United States', 
          description: 'Used as a hospital during the Civil War, now a museum, people have seen ghosts of soldiers here. An entire hospital "scene" completes with soldiers in their hospital beds and 2 people witnessed doctors working with them at the same time in the basement area or lower floor. Employees have also heard several unexplained noises. While on a field trip of the Marietta Museum located in the Kennesaw House, a girl reported seeing a woman dressed in a light blue antebellum style dress with pink flowers around the neckline and bodice. This woman smiled at her and then vanished. She claims it is a woman in a picture at the museum. The picture is of the original owners of the Kennesaw House.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Kennesaw_1.png', 
          price: 100
        },
        { 	
          statusId: '1',			
          locationName: 'Hampton Lillibridge House', 
          city: 'Savannah', 
          state: 'GA', 
          country: 'United States', 
          description: 'This is said to be the most haunted house in Savannah, and the only house known to have had an exorcism. When the house was being restored in the 1960s, some workmen refused to finish the job because of strange occurrences (tools disappearing, hearing footsteps when they knew they were alone, strange feelings). On one occasion, a man was seen wearing a black suit and bow tie in the third floor window when no one was living in the house. Neighbors have also heard a woman\'s scream coming from within the house, and a gray haired man has also been sighted.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Hampton_1.png', 
          price: 150
        },
        { 
          statusId: '1',			
          locationName: 'The Excelsior House', 
          city: 'Jefferson', 
          state: 'TX', 
          country: 'United States', 
          description: 'The Excelsior House is haunted by a headless man on the second floor, and a woman in black who has a baby. The woman has appeared and frightened many guests, including the famous film director Stephan Spielberg. They are possibly the spirits of guests or former employees.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Excelsior_1.png', 
          price: 250
        },
        { 	
          statusId: '1',			
          locationName: 'The Winchester House', 
          city: 'Cragfont', 
          state: 'TN', 
          country: 'United States', 
          description: 'Built in 1802. General James Winchester was a hero of the revolution, a Tennessee pioneer, and one of the founders of Memphis, Tennessee. Cragfont has reopened for the season. I can attest to strong energy levels in the master bedroom and the nursery, as well as a few other areas of the house. Be sure to stop by on a Sunday and ask Joanne for the "ghost tour."', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Winchester_1.png', 
          price: 100
        },
        { 	
          statusId: '1',			
          locationName: 'Woodruff-Fontaine House', 
          city: 'Memphis', 
          state: 'TN', 
          country: 'United States', 
          description: 'The "Rose Room" is haunted by Molly Woodruff whose bedroom it once was. Her picture is on the wall and she wanders the house, makes a depression in the bedclothes as if she slept there, and there are cold areas. Her most famous appearance was the day the house museum opened in the 1960\'s when a docent saw a woman in the bedroom who said, "My bed doesn\'t go there." That was the first of many such stories. Strange odors like cigar smoke have also been in evidence on the house\'s third floor from an unnamed visitor.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Woodruff_1.png', 
          price: 250
        },
        { 
          statusId: '1',				
          locationName: 'The Hemingway House', 
          city: 'Key West', 
          state: 'FL', 
          country: 'United States', 
          description: 'Many people have witnessed Ernest Hemingway waving from his studio window. and lights on and sounds of a typewriter being used after the tours are over and the house is unoccupied.', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/Poe_1.png', 
          price: 650
        },
        { 		
          statusId: '1',		
          locationName: 'Molly Brown House', 
          city: 'Denver', 
          state: 'CO', 
          country: 'United States', 
          description: 'The infamous house of Margaret Brown is haunted, although by who has not yet been determined. An investigator found cold spots throughout the house, the scent of pipe tobacco when no one was smoking, & doors that had "a mind of their own". Apparitions also seen. ', 
          imgPath: 'https://reactsolobucket.s3.us-east-2.amazonaws.com/MollyBrown_1.png', 
          price: 250
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Hauntings', null, {});
  }
};
