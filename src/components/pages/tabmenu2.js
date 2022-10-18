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
          <td className='downside-text'>Омега 3 - 170 мк, Омега 6 - 170 мкг, Омега 9-105 мкг.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Вспомогательное вещество:</td>
          <td className='downside-text'>концентрат рыбьего жира, льняное масло, подсолнечное масло, желатин, оливковое масло, глицерин, вода, соевое масло, токоферолы.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Способ применения и дозы:</td>
          <td className='downside-text'>В качестве пищевой добавки принимать по одной капсуле в день, желательно во время еды. Не следует использовать как замену полноценного рациона питания.  Не превышайте рекомендуемые дозировки.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Не содержит:</td>
          <td className='downside-text'>молока, яиц, рыбы, ракообразных, орехов, арахиса, дрожжей, искусственных красителей, ароматизаторов или консервантов.</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Форма выпуска:</td>
          <td className='downside-text'>ФОРМА ВЫПУСКА: 60 капсул во флаконе (Капсулы мягкие желатиновые цилиндрической формы, прозрачные, светло-желтого цвета).</td>
        </tr>
        <tr>
          <td className='downside-text-bolder'>Дневная рекомендованная норма %DV:</td>
          <td className='downside-text'>Одна (1) капсула в день.</td>
        </tr>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className='downside-text'>Для профилактики и в комплексной терапии сердечно-сосудистых заболеваний. При повышенном уровне холестерина. Часто болеющим людям. При сниженной умственной и физической работоспособности. При повышенной нервной возбудимости. Дополнительный источник полиненасыщенных жирных кислот омега-3.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className='downside-text'> Для профилактики и в комплексной терапии сердечно-сосудистых заболеваний. При повышенном уровне холестерина. Часто болеющим людям. При сниженной умственной и физической работоспособности. При повышенной нервной возбудимости. Дополнительный источник полиненасыщенных жирных кислот омега-3.</p>   
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
