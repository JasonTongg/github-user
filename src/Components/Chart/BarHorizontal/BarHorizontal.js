import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useCallback} from 'react';

ReactFC.fcRoot(FusionCharts, Chart);

const BarHorizontal = ({data}) => {
  let userData = useSelector((state) => state.items.list);
  let [repos, setRepos] = useState({});

  let getData = useCallback(async () => {
    try {
      let rawData = await window.fetch(userData.repos_url + '?per_page=100');
      let data = await rawData.json();
      let filterData = data.reduce((total, item) => {
        if (item.forks_count) {
          total[item.forks_count] = {
            label: item.name,
            value: item.forks_count,
          };
        }
        return total;
      }, {});

      const mostUsed = Object.values(filterData)
        .sort((a, b) => {
          return b.value - a.value;
        })
        .slice(0, 5);

      setRepos(mostUsed);
    } catch (error) {
      console.log(error.message);
    }
  }, [userData]);

  useEffect(() => {
    getData();
  }, [getData, userData]);

  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Forks per Project',
        yAxisNameFontSize: 16,
        xAxisNameFontSize: 16,
        showCanvasBorder: 0,
        showAlternateVGridColor: 0,
        usePlotGradientColor: 0,
        valueFontSize: 16,
        placeValuesInside: 0,
        divLineColor: '#102a42',
        divLineAlpha: 15,
        captionFontColor: '#102a42',
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: 'Roboto',
        baseFont: 'Open Sans',
        baseFontSize: 12,
        baseFontColor: '#617d98',
        smartLineColor: '#617d98',
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
        bgColor: '#FFFFFF',
        showBorder: 0,
      },
      data: repos,
    },
  };

  if (repos) {
    return <ReactFC {...chartConfigs} />;
  } else {
    return null;
  }
};

export default BarHorizontal;
