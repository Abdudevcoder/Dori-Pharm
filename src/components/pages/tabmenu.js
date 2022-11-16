import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Состав" {...a11yProps(0)} />
          <Tab label="Показание" {...a11yProps(1)} />
          <Tab label="Противопоказания" {...a11yProps(2)} />
          <Tab label="Способ хранения" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <table>
          <tbody>
            <tr>
              <td className="downside-text-bolder">Активное вещество:</td>
              <td className="downside-text">
                Витамин Е (в виде dl-альфа-токоферолацетата) - 400 МЕ (IU).
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="downside-text-bolder">
                Вспомогательное вещество:
              </td>
              <td className="downside-text">
                Желатин, глицерин, вода, соевое масло.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="downside-text-bolder">
                Способ применения и дозы:
              </td>
              <td className="downside-text">
                В качестве пищевой добавки принимайте по одной (1) таблетке в
                день, желательно во время еды. Не следует использовать как
                замену полноценного рациона питания. Не превышайте рекомендуемые
                дозировки.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="downside-text-bolder">Не содержит:</td>
              <td className="downside-text">
                Молока, яиц, рыбы, ракообразных, орехов, арахиса, дрожжей,
                искусственных красителей, ароматизаторов или консервантов.
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="downside-text-bolder">Форма выпуска:</td>
              <td className="downside-text">60 штук капсул во флаконе.</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="downside-text-bolder">
                Дневная рекомендованная норма %DV:
              </td>
              <td className="downside-text">Одна (1) мягкая капсула.</td>
            </tr>
          </tbody>
        </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="downside-text">
          Профилактика гиповитаминоза. Рекомендуется принимать: после
          реконвалесценции (выздоровление),высокие физические нагрузки, при
          пожилом возраст, заболевания связочного аппарата и мышц, при первичной
          мышечной дистрофии, при переутомлении. При дегенеративном и
          пролиферативном изменении суставов.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="downside-text">
          Индивидуальная непереносимость компонентов. Проконсультируйтесь с
          врачом перед использованием, если вы беременны, кормите грудью,
          принимаете лекарства, имеете заболевание или планируете медицинскую
          процедуру. Прекратите использование и обратитесь к врачу, при
          возникновений побочных реакций.
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p className="downside-text">
          Хранить в прохладном сухом недоступном для детей месте.
        </p>
        <p className="downside-text">
          Хранить при комнатной температуре (15 °-30°С).
        </p>
        <p className="downside-text">Держите упаковку плотно закрытой.</p>
        <p className="downside-text">
          Не используйте упаковку , если под колпачком нарушена или отсутствует
          защитная пленка.
        </p>
        <p className="downside-text">
          СРОК ГОДНОСТИ: 3 года. Не применять после истечения срока годности,
          указанного на упаковке.
        </p>
      </TabPanel>
    </Box>
  );
}
