
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
        ('Cosmopolitan', 'Shake', 'Martini', 'Cubed', 'Orange Peel', '2cl Vodka, 2cl Cointreau, 1cl Lime Juice, 3cl Cranberry Juice', '1. Chill glass with ice, and add another handful to the shaker 2. Add all ingredients to shaker and shake hard 3. Empty ice from glasses and strain drink into chilled glass 4. Add orange peel twist 5. Serve!', 'https://i.pinimg.com/564x/71/91/d4/7191d4fba2176b717b3dd804d3c8e11f.jpg', false),
        ('Cuba Libre', 'Build', 'Highball', 'Cubed', 'Lime Wedge', '4cl Light Rum, 1cl Lime Juice, 8cl Cola', '1. Add ice to glass 2. Pour lime juice and rum in glass, give it a stir 3. Pour cola on top 4. Add lime wedge garnish 5. Serve!', 'https://i.pinimg.com/564x/d1/e2/4c/d1e24c303d99e780bbf6cb858445d3c2.jpg', false),
        ('Pornstar Martini', 'Shake', 'Coupe', 'Cubed', 'Passion fruit half', '6cl Vanilla Vodka, 1.5cl Passoã Liqueur, 1.5cl Sugar Syrup, 1.5cl Lime Juice, 6cl Prosecco', '1. Chill glass with ice, and add another handful to the shaker 2.Scoop out the inside of 3 passion fruit halves into your shaker 3. Add all ingredients (except the prosecco) to shaker and shake hard 3. Empty ice from glasses and strain drink into chilled glass 4. Add the remaining passion fruit half garnish 5. Pour prosecco in shot glass 6. Serve!', 'https://i.pinimg.com/564x/ec/de/3d/ecde3d11668520fc240c294963d8f290.jpg', false ),
        ('Negroni Sbagliato', 'Build', 'Old-Fashioned', 'Large Cube', 'Orange Slice', '3cl Vermouth, 3cl Bitter Liqueur, 6cl Prosecco', '1.Add ice to glass 2.Pour all ingredients into the glass and briefly stir 3. Add orange slice garnish 4.Ooh stunning!', 'https://i.pinimg.com/564x/0b/e8/5c/0be85c994dd168170fdeab1d27bbf501.jpg', false),
        ('Margarita', 'Shake', 'Margarita', 'Cubed', 'Lime Wedge', '4.5cl Tequila, 2.25cl Triple Sec, 2.25cl Lime Juice, 0.5cl Agave Syrup', '1. Chill glass with ice, and add another handful to the shaker 2. Add all ingredients to shaker and shake hard 3. Empty ice from glasses, 4. Rub a lime wedge on the edge of the glasses, then dip glasses upside-down in salt until rim is covered 5. Strain drink into chilled glass 6. Add lime wedge twist 7. Serve!', 'https://i.pinimg.com/564x/ad/e9/2f/ade92f51cf29c117873540afdffb53e5.jpg', false),
        ('Piña Colada', 'Blend', 'Poco Grande', 'Cubed', 'Parasol, Pineapple Wedge & Maraschino Cherry', '6cl White Rum, 10.5cl Pineapple Juice, 2.25cl Cream Of Coconut, 1.5cl Lime Juice', '1.Add ice and ingredients to blender, and blende until you reach a milkshake-like consistency, 2.Pour blended mixture into glass, 3.Add all 3 garnishes, 4.Serve!', 'https://i.pinimg.com/564x/ee/30/d8/ee30d869ada02d9bfcb7f5f9a6d5f12b.jpg', false),
        ('Moscow Mule', 'Build', 'Copper Mug', 'Cubed', 'Lime Wedge & Mint', '6cl Vodka, 1.5cl Lime Juice, 1cl Sugar Syrip, 9cl Ginger Beer', '1.Pour vodka, juice and syrup into mug and give it a stir, 2.Fill mug with cubed ice 3.Top with ginger beer 4.Add lime wedge and mint sprigs 5.Serve!', 'https://i.pinimg.com/564x/9b/79/8b/9b798b1e181ff6d660c2bbb9a4359419.jpg', false),
        ('Espresso Martini', 'Shake', 'Martini', 'Cubed', 'Coffee Beans', '4.5cl Vodka, 3cl Espresso, 2cl Coffee Liqueur', '1. Chill glass with ice, and add another handful to the shaker 2. Add all ingredients to shaker and shake hard 3. Empty ice from glasses and strain drink into chilled glass 4. Add 3 coffee beans on top of the foam 5. Serve!', 'https://i.pinimg.com/564x/9e/3c/b4/9e3cb4932d7d245b349f18dcf64ffd57.jpg', false);
       
   