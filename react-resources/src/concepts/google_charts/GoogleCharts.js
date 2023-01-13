import React from 'react'
import Chart from 'react-google-charts'
import { Spacer } from '../../styled-components'
import { Center } from '../chatapp/styles'

const GoogleCharts = () => {
  return (
    <>
      <Center>
        <Spacer top={'30px'} />
        <span style={{ fontSize: '26px' }}> ColumnChart </span>
        <Chart
          width={650}
          height={650}
          chartType={'ColumnChart'}
          loader={<div>Loading Chart</div>}
          data={[
            ['city', '2010', '2000 Population'],
            ['Rajkot', 8175000, 8008000],
            ['Jamnagar', 3792000, 3694000],
            ['G-Dham', 2695000, 2896000],
            ['Surat', 2099000, 1953000],
            ['Kheda', 1526000, 1517000]
          ]}
          options={{
            // chartArea: { width: '70%' },
            title: 'Population of Largest Gujarat Cities',
            vAxis: {
              title: 'Total Population'
            },
            hAxis: {
              title: 'Cities'
            }
          }}
        />

        {/* Chart two */}
        <Chart
          width={650}
          height={'600px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540]
          ]}
          options={{
            title: 'Company Performance',
            hAxis: { title: '-- Year --', titleTextStyle: { color: 'green' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '80%', height: '70%' }
            // lineWidth: 3
          }}
        />
        {/* chart BubbleChart */}
        <Chart
          width={650}
          height={'600px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: 'number', label: 'x' },
              { type: 'number', label: 'values' },
              { id: 'i0', type: 'number', role: 'interval' },
              { id: 'i1', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' },
              { id: 'i2', type: 'number', role: 'interval' }
            ],
            [1, 100, 90, 110, 85, 96, 104, 120],
            [2, 120, 95, 130, 90, 113, 124, 140],
            [3, 130, 105, 140, 100, 117, 133, 139],
            [4, 90, 85, 95, 85, 88, 92, 95],
            [5, 70, 74, 63, 67, 69, 70, 72],
            [6, 30, 39, 22, 21, 28, 34, 40],
            [7, 80, 77, 83, 70, 77, 85, 90],
            [8, 100, 90, 110, 85, 95, 102, 110]
          ]}
          options={{
            intervals: { style: 'sticks' },
            legend: 'none'
          }}
        />

        {/* chart WordTree */}
        <Chart
          width={650}
          height={'600px'}
          chartType="WordTree"
          loader={<div>Loading Chart</div>}
          data={[
            ['Phrases'],
            ['cats are better than dogs'],
            ['cats eat kibble'],
            ['cats are better than hamsters'],
            ['cats are awesome'],
            ['cats are people too'],
            ['cats eat mice'],
            ['cats meowing'],
            ['cats in the cradle'],
            ['cats eat mice'],
            ['cats in the cradle lyrics'],
            ['cats eat kibble'],
            ['cats for adoption'],
            ['cats are family'],
            ['cats eat mice'],
            ['cats are better than kittens'],
            ['cats are evil'],
            ['cats are weird'],
            ['cats eat mice']
          ]}
          options={{
            wordtree: {
              format: 'implicit',
              word: 'cats'
            }
          }}
          rootProps={{ 'data-testid': '1' }}
        />

        {/* chart ScatterChart */}
        <Chart
          width={650}
          height={'600px'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Age', 'Weight'],
            [8, 12],
            [4, 5.5],
            [11, 14],
            [4, 5],
            [3, 3.5],
            [6.5, 7]
          ]}
          options={{
            title: 'Age vs. Weight comparison',
            hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
            vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
            legend: 'none'
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Center>
    </>
  )
}

export default GoogleCharts
