import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

function App() {
  const recipes = [
    {
      title: "免揉法式面包 (No-Knead French Bread)",
      ingredients: [
        "水 (Water) 375 g",
        "酵母 (Yeast) 5 g",
        "中筋面粉 (All-purpose flour) 350 g",
        "盐 (Salt) 5 g"
      ],
      instructions: [
        "酵母放水里搅拌一下，静置5分钟 (Dissolve yeast in water, let sit for 5 minutes)",
        "面粉和盐搅拌一下。加酵母水混合至没有干粉。发酵。 (Mix flour and salt. Add yeast water, mix until no dry flour. Let ferment.)",
        "等面团涨到两倍大，手指沾点水把面团迭一下赶出气泡。 (When dough doubles, poke with wet finger to release air.)",
        "面板上撒干粉，把面团倒出来整形成圆面饼。 (Dust surface, turn out dough, shape into round.)",
        "切成八份，每份揉成圆球醒15分钟 (Cut into 8 pieces, shape into balls, rest 15 min)",
        "取一圆球，擀成长方形，按破气泡，卷起成长园型，放烤盘。 (Take a ball, roll into rectangle, roll up, place on baking sheet.)",
        "整形完毕再醒 30 分钟，烤箱预热440° (Rest 30 min, preheat oven to 440°)",
        "每个长圆型上划几刀，刷黄油或橄榄油。 (Score each loaf, brush with butter or olive oil.)",
        "烤15 分钟。 (Bake 15 minutes.)"
      ]
    },
    {
      title: "甜口荷兰松饼 (Sweet Dutch Pancakes)",
      ingredients: [
        "全脂牛奶 (Whole milk) 半杯 118克 (1/2 cup 118g)",
        "中筋面粉 (All-purpose flour) 半杯 61克 (1/2 cup 61g)",
        "盐 (Salt) 1/4 茶匙 2克 (1/4 tsp 2g)",
        "鸡蛋 (Eggs) 2 个 (2)",
        "无盐黄油 (Unsalted butter) 15-20克 (1 Tbl)",
        "干奶粉 (Dry milk powder) 一大勺 (1 big spoon)"
      ],
      instructions: [
        "除黄油外食材混合在一起。 (Mix all ingredients except butter.)",
        "铸铁锅融化黄油，倒入混合液，放入烤箱 425°烤20 分钟。 (Melt butter in cast iron skillet, pour in mixture, bake at 425° for 20 minutes.)"
      ]
    },
    {
      title: "Good Old Fashioned Pancakes",
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "3 1/2 teaspoons baking powder",
        "1 teaspoon salt",
        "1 tablespoon white sugar",
        "1 1/4 cups milk",
        "1 egg",
        "3 tablespoons butter, melted"
      ],
      instructions: [
        "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
        "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot."
      ]
    },
    {
      title: "巧克力慕斯蛋糕 (Chocolate Mousse Cake)",
      ingredients: [
        "蛋黄 (Egg yolks) 4pcs",
        "糖 (Sugar) 35g",
        "牛奶 (Milk) 60g",
        "黑巧克力 (Dark chocolate) 240g",
        "Heavy Cream 360g",
        "朗姆酒 (Rum) 10g",
        "吉利丁片 (Gelatin sheets) 2pcs = 4g",
        "黑巧克力 (Dark chocolate) 30g (for cream)",
        "Heavy Cream 30g (for cream)",
        "Heavy Cream 90g (for cream)"
      ],
      instructions: [
        "Measure all ingredients ahead of time",
        "On low heat, pour egg yolk, sugar and Rum in. Stir until all melted and start to thicken. Move away from heat.",
        "Pour in all chocolate and stir until melted and form a smooth liquid.",
        "Pour in hot milk and stir well.",
        "Put gelatin sheet in cold water to soften, squeeze out extra water and put in the chocolate mixture. Stir and mix well.",
        "In a separate bowl, beat heavy cream 50% and smooth and fluffy.",
        "Scoop some whipped heavy cream into chocolate mixture. Mix well. Then pour all in the whipped cream and mix well.",
        "Pour into mousse ring on top of the cake bottom. Shake to smooth the top. Leave some space between the mousse ring and the cake bottom so the mousse can sip into outside of the cake bottom to form a smooth side.",
        "Fridge at least 5 hours.",
        "For chocolate cream: Mix 30g heavy cream and dark chocolate, in double boiler melt chocolate. Put in fridge for 20 minutes to cool down.",
        "Mix in 90g heavy cream.",
        "Beat until firm. Decorate."
      ]
    },
    {
      title: "黑巧克力奶油蛋糕 (Black Chocolate Cream Cake)",
      ingredients: [
        "Egg Yolk 3pcs",
        "Dark cocoa powder 18g (3tbsp)",
        "Hot oil 38g (3tbsp)",
        "Milk 65g",
        "Cake flour 55g 1/3cup",
        "Egg white 3 pcs",
        "Sugar 55g 1/4cup",
        "Corn starch 1tbsp",
        "Lemon juice 1tsp 5g",
        "Dark chocolate 140g (for ganache)",
        "Milk Or heavy Cream 60g 1/2 cup (for ganache)",
        "Heavy whipping cream 473ml 2cup",
        "Sugar 25g 2tbsp"
      ],
      instructions: [
        "Heat oil in microwave for 45 seconds. Pour in Dark cocoa power and mix well.",
        "Mix in milk",
        "Sift in cake flour and mix till no dry flour can be seen",
        "Mix one egg yolk a time",
        "Add lemon juice to egg white, beat",
        "Add sugar in three batches, beat high speed",
        "Add corn starch, beat till firm",
        "Fold in 1).",
        "Put a pan with water in oven preheat to 280F",
        "Put cake liquid in a 6” cake pan, shake to remove big bubbles. 280F 1 hour",
        "Put cake upside down to cool down.",
        "Slice into three even layers",
        "For ganache: Melt chocolate in milk/heavy cream and put in fridge to cool down.",
        "加入放凉的Chocolate Ganache，一起打发成巧克力奶油。"
      ]
    },
    {
      title: "6寸巧克力脏脏云朵蛋糕 (6-inch Chocolate Dirty Cloud Cake)",
      ingredients: [
        "鸡蛋 (Eggs) 3 pcs",
        "牛奶 (Milk) 50g",
        "色拉油 (Salad oil) 40g",
        "低筋面粉 (Cake flour) 50g",
        "可可粉 (Cocoa powder) 10g",
        "浓缩咖啡粉 (Instant coffee powder) 2g",
        "白砂糖 (Sugar) 50g",
        "巧克力豆 (Chocolate chips) 50g",
        "淡奶油 (Heavy cream) 50g"
      ],
      instructions: [
        "面粉， 可可粉过筛， 色拉油加热到80F（不超过90F）， 倒入干粉中， 搅拌均匀。 加入牛奶， 搅拌均匀",
        "蛋黄加入1 中，搅拌均匀",
        "蛋白，糖， 干性打发",
        "翻拌混合2， 3",
        "倒入6寸摸具， 350F 45 分钟",
        "For ganache: heavy cream microwaved 30sec. Pour in chocolate chips, cover for 5 minutes. Stir till smooth. Refrigerate 5-10 minutes to thicken it.",
        "For cream: 200g heavy cream；15g sugar；30g ganache. Beat till like yogurt."
      ]
    },
    {
      title: "巴斯克焦糖香流心芝士蛋糕 (Basque Caramel Cheesecake)",
      ingredients: [
        "Unsalted Cream Cheese 400g 1.67cups",
        "Heavy whipping cream 200g 0.84cup",
        "Sugar 80g 1/3cup",
        "Vanilla Essence 5drops or more",
        "Eggs 3 57g/each",
        "Corn starch 1.5tbsp 13g"
      ],
      instructions: [
        "活底模具，铺上烘焙纸",
        "室温软化的无盐奶油奶酪，加糖和蛋液, vanilla extract，搅匀",
        "加入heavy cream, 搅匀",
        "Corn Starch过筛, 搅匀",
        "面糊最后过筛一次更细腻(optional)",
        "450F 25 min",
        "冷藏5小时以上"
      ]
    },
    {
      title: "戚风蛋糕卷 (Chiffon Cake Roll)",
      ingredients: [
        "Eggs Yolks 5",
        "Veg Oil 48g",
        "Milk 90g",
        "Flour 55g – 60g",
        "Coco Powder 10g (optional)",
        "Greentea powder 5g (optional)",
        "Eggs Whites 5",
        "Cream of Tartar",
        "Sugar 55g"
      ],
      instructions: [
        "330F",
        "13”x9” - 14min",
        "10”x12” – 18min",
        "撒葱花肉松在表面烤。",
        "凉到室温，铺Mannaise,肉松， 卷紧定型。室温放凉。"
      ]
    },
    {
      title: "Tirumisu",
      ingredients: [
        "Whipping cream 400g",
        "Mascarpone 225g",
        "Sugar 58g",
        "Rum 15ml",
        "Gelatin 1 pack （7克）",
        "Lady fingers",
        "Coffee 200ml",
        "Rum 15ml",
        "Cocoa powder"
      ],
      instructions: [
        "中速打发 WhippingCream 至浓稠， 加入Mascarpone cheese。  打匀",
        "加糖， Rumors， 打匀",
        "Gelatin 凉水搅匀， 用温水化开， 不要有疙瘩。",
        "将化开的Gelatin 加入2 中",
        "速溶咖啡200ml， 加入15ml Rum",
        "手指饼干在5中略浸一下， 放入6“方形蛋糕摸具， 底部是可以脱模的。",
        "铺好第一层， 加入一半的4料抹匀",
        "重复6-7",
        "放冰箱冷藏5+小时",
        "脱模， 表面撒可可粉做装饰"
      ]
    },
    {
      title: "6寸咸奶油戚风蛋糕 (6-inch Salty Cream Chiffon Cake)",
      ingredients: [
        "玉米油 (Corn oil) 40克",
        "可可粉 (Cocoa powder) 15克",
        "牛奶 (Milk) 50克",
        "低筋面粉 (Cake flour) 45 克",
        "蛋黄 (Egg yolks) 4 个",
        "糖 (Sugar) 35克",
        "蛋清 (Egg whites) 4 个",
        "塔塔粉 (Cream of tartar)",
        "白糖 (Sugar) 100 克 (for caramel)",
        "水 (Water) 26克",
        "淡奶油 (Heavy cream) 100克",
        "黄油 (Butter) 26克",
        "盐 (Salt) 2克",
        "焦糖酱 (Caramel sauce) 100 克",
        "淡奶油 (Heavy cream) 320 克",
        "盐 (Salt) 2 克",
        "糖 (Sugar) 20 克",
        "水 (Water) 克",
        "黄油 (Butter) 5 克",
        "果仁 (Nuts) 80克",
        "黑巧克力 (Dark chocolate) 50 克",
        "玉米cereral (Corn cereal) 50克",
        "焦糖果仁 (Caramel nuts) 30 克",
        "蛋黄 (Egg yolk) 1",
        "糖 (Sugar) 8克",
        "牛奶 (Milk) 80 克",
        "淡奶油 (Heavy cream) 80 克",
        "香草精 (Vanilla extract) 几滴",
        "吉利丁 (Gelatin) 3克"
      ],
      instructions: [
        "311F 40分钟 （ 280F 20分钟， 300F10 分钟 311 10-20 分钟）",
        "两个六寸蛋糕模， 2/3， 1/3.  分成三片",
        "For caramel sauce: 白糖 100 克，水 26克，淡奶油 100克，黄油 26克，盐 2克. 熬制冒大泡，变焦糖颜色。加入温的淡奶油，搅拌，加入黄油，盐。搅拌丝滑倒入容器冷藏过夜。",
        "For caramel cream: 焦糖酱 100 克，淡奶油 320 克，盐 2 克",
        "For caramel nuts: 糖 20 克，水 克，黄油 5 克，果仁 80克. 加热至融化，加入黄油，果仁，慢慢炒至焦糖色，离火继续炒至浓稠，摊开放在拷盘上凉凉。",
        "For crisp: 黑巧克力 50 克，玉米cereral 50克，焦糖果仁 30 克. 黑巧加热至融化，倒入玉米脆片，搅匀。加入碾碎的果仁搅匀凉凉",
        "For pudding: 蛋黄 1，糖 8克，牛奶 80 克，淡奶油 80 克，香草精 几滴，吉利丁 3克. 所有食材除吉利丁外混合加热至冒泡，加入吉利丁片。搅匀至融化。倒入六寸摸具冷藏过夜或冷冻2小时定型"
      ]
    },
    {
      title: "Kyle’s One90 Brisket Chili",
      ingredients: [
        "Beef Brisket/Roast 2lb",
        "Coke/Dr Pepper 4 oz",
        "Onion .5",
        "Bell Peppers 1",
        "Tomato Sauce 2 cups",
        "Worcestershire 2 TBSP",
        "Vinegar 2 TBSP",
        "Ketchup .5 cup",
        "Creole Mustard .5 cup",
        "Paprika 2 TBSP",
        "Chili Powder 4 TBSP",
        "Garlic Powder 1 TBSP",
        "Cumin 1 TBSP",
        "Cayenne 1 TBSP",
        "Honey 1 TBSP",
        "Salt/Pepper to taste",
        "Corn Starch As needed"
      ],
      instructions: [
        "抹胡椒盐腌一晚。 除血水。",
        "高压锅加 all ingredients",
        "炖至烂"
      ]
    },
    {
      title: "Instant Pot Mexican Shredded Beef",
      ingredients: [
        "Beef broth 1 cup",
        "Kosher salt 1 teaspoon",
        "Freshly cracked black pepper 1 teaspoon",
        "Ground cumin 1 tablespoon",
        "Chili powder 2 teaspoons",
        "Garlic powder 1 teaspoon",
        "Onion powder 1 teaspoon",
        "Paprika 1 teaspoon",
        "Dried oregano 1 teaspoon",
        "Crushed red pepper flakes 1 teaspoon",
        "Olive oil 2 tablespoons",
        "Boneless chuck roast 2-1/2 to 3-pound",
        "Prepared salsa 1 cup"
      ],
      instructions: [
        "Pour beef broth in a small bowl. Add salt, pepper, cumin, chili powder, garlic powder, onion powder, paprika, oregano and crushed red pepper flakes. Whisk to combine and set aside.",
        "Pour oil into your Instant Pot and set to saute. When oil is heated, sear roast on all sides until browned. Turn off Instant Pot.",
        "Pour beef broth mixture and salsa over roast.",
        "Place the lid on pressure cooker and lock. Steam release knob should be set on “sealing”. Cook on manual setting (high pressure) for 70 minutes. Allow pressure to release naturally.",
        "Remove beef from pressure cooker and shred with 2 forks, discarding any fat. Allow fat to rise in liquid and skim off fat. Return beef to liquid mixture."
      ]
    },
    {
      title: "Air Fryer Roasted Butternut Squash & Kale Salad with Balsamic-Maple Dressing",
      ingredients: [
        // Assuming standard ingredients, but not detailed in text
        "Butternut squash",
        "Kale",
        "Balsamic vinegar",
        "Maple syrup"
      ],
      instructions: [
        // Not detailed, placeholder
        "Roast squash in air fryer, mix with kale and dressing."
      ]
    },
    {
      title: "Avocado Tomato Salad",
      ingredients: [
        "Avocado",
        "Tomato"
      ],
      instructions: [
        "Mix avocado and tomato."
      ]
    },
    {
      title: "Southwestern Chopped Salad",
      ingredients: [
        // Not detailed
        "Various veggies"
      ],
      instructions: [
        "Chop and mix."
      ]
    }
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
