import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Состав" {...a11yProps(0)} />
          <Tab label="Показание" {...a11yProps(1)} />
          <Tab label="Противопоказания" {...a11yProps(2)} />
          <Tab label="Способ хранения" {...a11yProps(3)} />
          <Tab label="ВАЖНАЯ ИНФОРМАЦИЯ" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <table>
        <tr>
          <td className='downside-text-bolder'>Активное вещество:</td>
          <td className='downside-text'>Витамин А (как бета-каротин)-4000МЕ, Витамин Е (в виде ацетата) -15МЕ , Витамин С (в виде аскорбиновой кислоты) - 60 мг, Фолиевая кислота - 195 мкг, Витамин B1 (как тиамин HCL) - 1,4 мг, Рибофлавин (витамин В2) - 2 мг, Ниацин (как ниацинамид) - 18 мг,
            Витамин B6 (как пиридоксин HCL)- 2 мг, Витамин B12 (как цианокобаламин) - 1 мкг, 
            Витамин D3 (как холекальциферол) - 200МЕ , биотин - 100 мкг, Пантотеновая кислота -6 мг
            Витамин К1(как фитонадион)-30 мкг, Лютеин-250 мкг, Кальций (в виде карбоната кальция) - 162 мг , Йод (как йодид калия)- 100 мкг, Железо (в виде фумарата железа)- 10 мг, Магний (в виде оксида магния) - 50мг, Калий (в виде хлорида калия)-40 мг, Хром (как пиколинат хрома)-40 мг, Селен- 30 мкг , Цинк (в виде оксида цинка)- 5 мг, Молибден натрия - 55 мкг  и    Запатентованная мужская травяная смесь - 150 мг.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Вспомогательное вещество:</td>
          <td className='downside-text'>стеариновая кислота, микрокристаллическая целлюлоза, кроскармеллоза натрия, диоксид кремния, стеарат магния, гипромеллоза, диоксид титана, FD&C красный, FD&C зеленый.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Способ применения и дозы:</td>
          <td className='downside-text'>В качестве пищевой добавки принимайте по одной (1) таблетке в день, желательно во время еды. Не следует использовать как замену полноценного рациона питания. Не превышайте рекомендуемые дозировки.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Не содержит:</td>
          <td className='downside-text'>Принимать по одной (1) таблетке в день во время еды. Не следует использовать как замену полноценного рациона питания. Не превышайте рекомендуемые дозировки.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Форма выпуска:</td>
          <td className='downside-text'>60 таблеток во флаконе.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Дневная рекомендованная норма %DV:</td>
          <td className='downside-text'>Одна (1) таблетка.</td>
        </tr>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className='downside-text'>Восполняет дефицит кальция и витамина D3 в организме. Способствует общему укреплению костной ткани, ускорению восстановления костной ткани при травмах. Содействует укреплению (минерализации) зубов. Обеспечивает профилактику развития заболеваний опорно-двигательного аппарата (в том числе остеопороза, саркопении). Нормализует фосфорно-кальциевый обмен. Помогает снижению болевого синдрома при заболеваниях опорно-двигательного аппарата.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className='downside-text'>Индивидуальная непереносимость компонентов. Проконсультируйтесь с врачом перед использованием, если вы беременны, кормите грудью, принимаете лекарства, имеете заболевание или планируете медицинскую процедуру. Прекратите использование и обратитесь к врачу, при возникновений побочных реакций.</p>   
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p className='downside-text'>Хранить в прохладном сухом недоступном для детей месте.</p>
        <p className='downside-text'>Хранить при комнатной температуре  (15 °-30°С).</p>
        <p className='downside-text'>Держите упаковку плотно закрытой.</p>
        <p className='downside-text'>Не используйте упаковку , если под колпачком нарушена или отсутствует защитная пленка.</p>
        <p className='downside-text'>СРОК ГОДНОСТИ:  3 года. Не применять после истечения срока годности, указанного на упаковке.</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <p className='downside-text'>Длительное потребление высоких уровней витамина А (за исключением источников бета-каротина) может увеличить риск развития остеопороза у взрослых. Не принимайте этот продукт, если принимаете другие добавки с витамином А.</p>
      </TabPanel>
    </Box>
  );
}
