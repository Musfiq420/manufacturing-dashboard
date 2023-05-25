import React, { useState } from 'react';

import ComposedChartUI from '@/components/ui-components/molecules/ComposedChart';
import {  FlexRowBetween, SectionContainer } from '../ui-components/atoms/container';
import { SectionHeading } from '../ui-components/atoms/text';
import { Option, Select } from '../ui-components/atoms/input';


const TrendAnalysis = () => {
  const [day, setDay] = useState("7");
  const data = [
    {
      date: '8 Dec',
      finishing: 62.24,
      cutting: 60.48,
      sewing: 64.77,
      printing: 69.28,
      embroidery: 74.25
    },
    {
      date: '10 Dec',
      embroidery: 74.15,
      finishing: 54.34,
      cutting: 52.82,
      sewing: 63.94,
      printing: 63.19
    },
    {
      date: '11 Dec',
      embroidery: 74.1,
      finishing: 53.56,
      printing: 68.62,
      sewing: 64.44,
      cutting: 61.06
    },
    {
      date: '12 Dec',
      printing: 69.54,
      cutting: 59.11,
      sewing: 61.16,
      finishing: 56.62,
      embroidery: 73.97
    },
    {
      date: '13 Dec',
      embroidery: 73.59,
      printing: 66.73,
      sewing: 64.86,
      cutting: 59.36,
      finishing: 63.53
    },
    {
      date: '14 Dec',
      printing: 65.49,
      finishing: 51.23,
      sewing: 64.34,
      embroidery: 74.15,
      cutting: 59.42
    },
    {
      date: '15 Dec',
      cutting: 55.22,
      embroidery: 74.23,
      printing: 64.67,
      finishing: 57.77,
      sewing: 63.52
    }
  ];



  return (
    <SectionContainer>
      <FlexRowBetween>
        <SectionHeading>
          Trend Analysis
        </SectionHeading>
        <Select value={day} onChange={(e) => setDay(e.target.value)} >
              {
                [
                  {
                    value: 7,
                    title: "Last Week"
                  },
                  {
                    value: 30,
                    title: "Last Month"
                  },
                  {
                    value: 90,
                    title: "Last 3 Months"
                  },
                  {
                    value: 180,
                    title: "Last 6 Months"
                  }
                ].map((e) => (<Option value={e.value}>{e.title}</Option>))
              }
            </Select>
      </FlexRowBetween>
      
      
            <ComposedChartUI
              charts={[
                          {
                            type:"line",
                            dataKey: "cutting",
                            color: "#90AFFF"
                          },
                          {
                            type:"line",
                            dataKey: "sewing",
                            color: "#4DDC41"
                          },
                          {
                            type:"line",
                            dataKey: "embroidery",
                            color: "#FCCC50"
                          },
                          {
                            type:"line",
                            dataKey: "printing",
                            color: "purple"
                          },
                          {
                            type:"line",
                            dataKey: "finishing",
                            color: "#FF9595"
                          }
                        ]}
                        data={data}
            xDataKey="date"
              />
    </SectionContainer>


    // <DashboardSection
    //   title="Trend Analysis"
    //   subTitle={`${properCase(dept)}, ${day==="7"?"Last Week":day==="30"?"Last Month":day==="90"?"Last 3 Months":day==="180"?"Last 6 Months":""}`}
    //   filterArray={[
    //     {
    //       filterType: "select",
    //       data: {
    //         value: day,
    //         onChange: (e) => setDay(e.target.value),
    //         options: [
    //           {
    //             value: 7,
    //             title: "Last Week"
    //           },
    //           {
    //             value: 30,
    //             title: "Last Month"
    //           },
    //           {
    //             value: 90,
    //             title: "Last 3 Months"
    //           },
    //           {
    //             value: 180,
    //             title: "Last 6 Months"
    //           }
    //         ]
    //       }
    //     }
    //   ]}
    //   visuals={[
    //     {
    //       type: "chart",
    //       data: {
    //         data: efficiencyArray,
    //         xDataKey:"date",
    //         charts:[
    //           {
    //             type:"line",
    //             dataKey: "efficiency"
    //           }
    //         ]
    //       }
    //     }
    //   ]}
    // />

    
  )
}

export default TrendAnalysis