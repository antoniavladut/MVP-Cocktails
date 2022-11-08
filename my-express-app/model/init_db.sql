
DROP TABLE IF EXISTS cocktails;
CREATE TABLE cocktails ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(100), 
    method VARCHAR(100), 
    glass VARCHAR(100),
    ice VARCHAR(100),
    garnish VARCHAR(100),
    ingredients LONGTEXT,
    instructions LONGTEXT,
    imageUrl LONGTEXT,
    favourite boolean

); 
 
INSERT INTO cocktails (title, method, glass, ice, garnish, ingredients, instructions, imageUrl, favourite)  
    VALUES
        ('Cosmopolitan', 'Shake', 'Martini', 'Cubed', 'Orange Peel', '2cl Vodka\n2cl Cointreau\n1cl Lime Juice\n3cl Cranberry Juice', '1. Chill glass with ice, and add another handful to the shaker\n2. Add all ingredients to shaker and shake hard\n3. Empty ice from glasses and strain drink into chilled glass\n4. Add orange peel twist\n5. Serve!', 'https://i.pinimg.com/564x/71/91/d4/7191d4fba2176b717b3dd804d3c8e11f.jpg', false),
        ('Cuba Libre', 'Build', 'Highball', 'Cubed', 'Lime Wedge', '4cl Light Rum\n1cl Lime Juice\n8cl Cola', '1. Add ice to glass\n2. Pour lime juice and rum in glass, give it a stir \n3. Pour cola on top\n4. Add lime wedge garnish\n5. Serve!', 'https://i.pinimg.com/564x/d1/e2/4c/d1e24c303d99e780bbf6cb858445d3c2.jpg', false),
        ('Pornstar Martini', 'Shake', 'Coupe', 'Cubed', 'Passion Fruit Half', '6cl Vanilla Vodka\n1.5cl Passoã Liqueur\n1.5cl Sugar Syrup\n1.5cl Lime Juice\n6cl Prosecco', '1. Chill glass with ice, and add another handful to the shaker\n2. Scoop out the inside of three passion fruit halves into your shaker\n3. Add all ingredients (except the prosecco) to shaker and shake hard 3. Empty ice from glasses and strain drink into chilled glass\n4. Add the remaining passion fruit half garnish\n5. Pour prosecco in shot glass\n6. Serve!', 'https://i.pinimg.com/564x/ec/de/3d/ecde3d11668520fc240c294963d8f290.jpg', false ),
        ('Negroni Sbagliato', 'Build', 'Old-Fashioned', 'Large Cube', 'Orange Slice', '3cl Vermouth\n3cl Bitter Liqueur\n6cl Prosecco', '1. Add ice to glass\n2. Pour all ingredients into the glass and briefly stir\n3. Add orange slice garnish\n4. Ooh stunning!', 'https://i.pinimg.com/564x/0b/e8/5c/0be85c994dd168170fdeab1d27bbf501.jpg', false),
        ('Margarita', 'Shake', 'Margarita', 'Cubed', 'Lime Wedge', '4.5cl Tequila\n2.25cl Triple Sec\n2.25cl Lime Juice\n0.5cl Agave Syrup', '1. Chill glass with ice, and add another handful to the shaker\n2. Add all ingredients to shaker and shake hard\n3. Empty ice from glasses\n4. Rub a lime wedge on the edge of the glasses, then dip glasses upside-down in salt until rim is covered\n5. Strain drink into chilled glass\n6. Add lime wedge twist\n7. Serve!', 'https://i.pinimg.com/564x/ad/e9/2f/ade92f51cf29c117873540afdffb53e5.jpg', false),
        ('Piña Colada', 'Blend', 'Poco Grande', 'Cubed', 'Parasol, Pineapple Wedge & Maraschino Cherry', '6cl White Rum\n10.5cl Pineapple Juice\n2.25cl Cream Of Coconut\n1.5cl Lime Juice', '1. Add ice and ingredients to blender, and blend until you reach a milkshake-like consistency\n2. Pour blended mixture into glass\n3. Add all three garnishes\n4. Serve!', 'https://i.pinimg.com/564x/ee/30/d8/ee30d869ada02d9bfcb7f5f9a6d5f12b.jpg', false),
        ('Moscow Mule', 'Build', 'Copper Mug', 'Cubed', 'Lime Wedge & Mint', '6cl Vodka\n1.5cl Lime Juice\n1cl Sugar Syrup\n9cl Ginger Beer', '1. Pour vodka, juice and syrup into mug and give it a stir\n2. Fill mug with cubed ice\n3. Top with ginger beer\n4. Add lime wedge and mint sprigs\n5. Serve!', 'https://i.pinimg.com/564x/9b/79/8b/9b798b1e181ff6d660c2bbb9a4359419.jpg', false),
        ('Espresso Martini', 'Shake', 'Martini', 'Cubed', 'Coffee Beans', '4.5cl Vodka\n3cl Espresso\n2cl Coffee Liqueur', '1. Chill glass with ice, and add another handful to the shaker\n2. Add all ingredients to shaker and shake hard\n3. Empty ice from glasses and strain drink into chilled glass\n4. Add three coffee beans on top of the foam\n5. Serve!', 'https://i.pinimg.com/564x/9e/3c/b4/9e3cb4932d7d245b349f18dcf64ffd57.jpg', false);
       
   