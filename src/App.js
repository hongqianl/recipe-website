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
