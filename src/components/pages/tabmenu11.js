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
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <table>
        <tr>
          <td className='downside-text-bolder'>Активное вещество:</td>
          <td className='downside-text'>Витамин D3 Холекальциферол 50 мкг (mсg), 2000 МЕ (IU)</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Вспомогательное вещество:</td>
          <td className='downside-text'>кроскармеллоза натрия, дикальцийфосфат, микрокристаллическая целлюлоза, стеарат магния, диоксид кремния, стеариновая кислота.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Способ применения и дозы:</td>
          <td className='downside-text'>В качестве пищевой добавки принимайте по одной (1) таблетке в день, желательно во время еды. Не следует использовать как замену полноценного рациона питания. Не превышайте рекомендуемые дозировки.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Не содержит:</td>
          <td className='downside-text'>Молока, яиц, рыбы, ракообразных, орехов, арахиса, дрожжей, искусственных красителей, ароматизаторов или консервантов.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Форма выпуска:</td>
          <td className='downside-text'>60 шт таблеток.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Дневная рекомендованная норма %DV:</td>
          <td className='downside-text'>Одна (1) таблетка.</td>
        </tr>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className='downside-text'>-профилактика и в составе комплексной терапии рахита; профилактика дефицита витамина D3 у групп высокого риска (мальабсорбция, хронические заболевания тонкой кишки, билиарный цирроз печени, состояние после резекции желудка и / или тонкой кишки); в составе комплексной терапии остеопороза (различного генеза): в составе комплексной терапии остеомаляции (на фоне нарушений минерального обмена у пациентов старше 45 лет); при длительной иммобилизации в случае травм; при отказе от приема молока и молочных продуктов; в составе комплексной терапии гипопаратиреоза и псевдогипопаратиреоза.</p>
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
    </Box>
  );
}
