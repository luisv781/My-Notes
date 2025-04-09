import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "my notes",
  description: "my tuff notes 😼",
  markdown: {
    math: true
  },
  base: '/My-Notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'IB Environmental',
        items: [
          { text: 'What is ESS', link: '/IB Environmental Systems and Societies/What is ESS' },
          { text: 'Systems', link: '/IB Environmental Systems and Societies/Systems' },
          { text: 'Models', link: '/IB Environmental Systems and Societies/Models' },
          { text: 'Energy and Equilibria', link: '/IB Environmental Systems and Societies/Energy and Equilibria' },
          { text: 'Energy and Equilibria 2', link: '/IB Environmental Systems and Societies/Energy and Equilibria 2' },
          { text: 'Energy and Equilibria 3', link: '/IB Environmental Systems and Societies/Energy and Equilibria 3' },
          { text: 'Sustainability', link: '/IB Environmental Systems and Societies/Sustainability' },
          { text: 'Sustainability 2', link: '/IB Environmental Systems and Societies/Sustainability 2' },
          { text: 'Humans and Pollution', link: '/IB Environmental Systems and Societies/Humans and Pollution' },
          { text: 'Species and Populations', link: '/IB Environmental Systems and Societies/Species and Populations' },
          { text: 'Population Curves', link: '/IB Environmental Systems and Societies/Population Curves' },
          { text: 'Ecosystems and Ecology', link: '/IB Environmental Systems and Societies/Ecosystems and Ecology' },
          { text: 'Food Chains and Trophic Levels', link: '/IB Environmental Systems and Societies/Food Chains and Trophic Levels' },
          { text: 'Ecological Pyramids', link: '/IB Environmental Systems and Societies/Ecological Pyramids' },
          { text: 'Productivity', link: '/IB Environmental Systems and Societies/Productivity' },
          { text: 'Flows of Energy and Matter', link: '/IB Environmental Systems and Societies/Flows of Energy and Matter' },
          { text: 'Biomes 2', link: '/IB Environmental Systems and Societies/Biomes 2' },
          { text: 'Biomes', link: '/IB Environmental Systems and Societies/Biomes' },
          { text: 'Zonation and Succession', link: '/IB Environmental Systems and Societies/Zonation and Succession' },
          { text: 'K- and r-Strategists', link: '/IB Environmental Systems and Societies/K- and r-Strategists' },
          { text: 'Measuring Abiotic Factors', link: '/IB Environmental Systems and Societies/Measuring Abiotic Factors' },
          { text: 'Measuring Biotic Factors', link: '/IB Environmental Systems and Societies/Measuring Biotic Factors' },
          { text: 'Abundance', link: '/IB Environmental Systems and Societies/Abundance' },
          { text: 'Population Density', link: '/IB Environmental Systems and Societies/Population Density' },
          { text: 'Measuring Change', link: '/IB Environmental Systems and Societies/Measuring Change' },
          { text: 'Biodiversity & Conservation', link: '/IB Environmental Systems and Societies/Biodiversity & Conservation' },
          { text: 'Biodiversity', link: '/IB Environmental Systems and Societies/Biodiversity' },
          { text: 'Threats to Biodiversity', link: '/IB Environmental Systems and Societies/Threats to Biodiversity' },
          { text: 'Arguments for Preserving Biodiversity', link: '/IB Environmental Systems and Societies/Arguments for Preserving Biodiversity' },
          { text: 'Biodiversity Conservation', link: '/IB Environmental Systems and Societies/Biodiversity Conservation' },
          { text: 'Freshwater', link: '/IB Environmental Systems and Societies/Freshwater' },
          { text: 'Food Demand', link: '/IB Environmental Systems and Societies/Food Demand' },
          { text: 'Water Testing', link: '/IB Environmental Systems and Societies/Water Testing' },
          { text: 'Soil Systems', link: '/IB Environmental Systems and Societies/Soil Systems' },
          { text: 'Food Production', link: '/IB Environmental Systems and Societies/Food Production' },
          { text: 'Inequalities in the Food Supply', link: '/IB Environmental Systems and Societies/Inequalities in the Food Supply' },
          { text: 'Terrestrial Food Production Systems and Food Choices', link: '/IB Environmental Systems and Societies/Terrestrial Food Production Systems and Food Choices' }
        ]
      },
      {
        text: 'IB Physics',
        items: [
          { text: 'Kinematics Formulas', link: '/IB Physics/Kinematics Formulas' },
          { text: 'Graphing and Kinematics', link: '/IB Physics/Graphing and Kinematics' },
          { text: 'Angular Velocity', link: '/IB Physics/Angular Velocity' },
          { text: 'Projectile Motion', link: '/IB Physics/Projectile Motion' },
          { text: 'Forces', link: '/IB Physics/Forces' },
          { text: 'Momentum and Energy in Rotation', link: '/IB Physics/Momentum and Energy in Rotation' }
        ]
      },
      {
        text: 'AP Government',
        items: [
          { text: 'Reasons for the Constitutional Convention', link: '/AP Government/Reasons for the Constitutional Convention' },
          { text: 'Constitutional Convention - Compromises', link: '/AP Government/Constitutional Convention - Compromises' },
          { text: 'The Constitution', link: '/AP Government/The Constitution' },
          { text: 'The Bill of Rights', link: '/AP Government/The Bill of Rights' },
          { text: 'State and Federal Powers', link: '/AP Government/State and Federal Powers' },
          { text: 'Structure of Congress', link: '/AP Government/Structure of Congress' },
          { text: 'Role of Congress', link: '/AP Government/Role of Congress' },
          { text: 'Presidential Powers', link: '/AP Government/Presidential Powers' }
        ]
      },
      {
        text: 'IB History',
        items: [
          { text: 'Farmers and the Populist Movement', link: '/IB History/Farmers and the Populist Movement' },
          { text: 'The Progressive Era', link: '/IB History/The Progressive Era' },
          { text: 'The Politics of Progressivism', link: '/IB History/The Politics of Progressivism' },
          { text: 'US Foreign Policies 1901-17', link: '/IB History/US Foreign Policies 1901-17' },
          { text: 'US relations with the Great Powers and Asia', link: '/IB History/US relations with the Great Powers and Asia' },
          { text: 'President Taft and Dollar Diplomacy', link: '/IB History/President Taft and Dollar Diplomacy' },
          { text: 'The US and the First World War', link: '/IB History/The US and the First World War' },
          { text: 'US Entry into WWI', link: '/IB History/US Entry into WWI' },
          { text: 'US during WWI', link: '/IB History/US during WWI' },
          { text: 'World War I', link: '/IB History/World War I' },
          { text: 'End of World War I', link: '/IB History/End of World War I' },
          { text: 'Impact of WWI on Latin America', link: '/IB History/Impact of WWI on Latin America' },
          { text: 'US Influence in Latin America', link: '/IB History/US Influence in Latin America' },
          { text: 'Progressive Era Review', link: '/IB History/Progressive Era Review' },
          { text: 'The 1920s', link: '/IB History/The 1920s' },
          { text: 'Prohibition and Government Scandals', link: '/IB History/Prohibition and Government Scandals' },
          { text: 'Coolidge, The Economy, and Consumerism', link: '/IB History/Coolidge, The Economy, and Consumerism' },
          { text: '1920s Cultural Change and Resistance', link: '/IB History/1920s Cultural Change and Resistance' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/luisv781/My-Notes' }
    ]
  }
})
