import React from 'react'
import { ComparisonContainer, FlexRowBetween, MiniCardContainer, SectionContainer } from '../ui-components/atoms/container'
import { SectionHeading } from '../ui-components/atoms/text'
import { Option, Select } from '../ui-components/atoms/input'
import DataGrid from '../ui-components/molecules/Datagrid'

const BlockSummary = () => {


  const columns = React.useMemo(
    () => [
      {
        Header: 'Block',
        accessor: 'block'
      },
      {
        Header: 'Man Power',
        accessor: 'man-power'
      },
      {
        Header: 'Production',
        accessor: 'production'
      },
      
      {
        Header: 'Achievement',
        accessor: 'achievement'
      },
      
      {
        Header: 'Efficiency',
        accessor: 'efficiency'
      }
    ],
    []
  )



  const data = React.useMemo(
    () => [
      {block: "1-6", "man-power": 152, production: 1535, achievement:<MiniCardContainer inc>97.65%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>56.87%</div>},
      {block: "7-15", "man-power": 45, production: 452, achievement:<MiniCardContainer inc>99.24%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>54.39%</div>},
      {block: "16-21", "man-power": 56, production: 234, achievement:<MiniCardContainer inc>92.54%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>62.62%</div>},
      {block: "22-30", "man-power": 123, production: 531, achievement:<MiniCardContainer inc>96.56%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>57.28%</div>},
      {block: "31-45", "man-power": 45, production: 452, achievement:<MiniCardContainer inc>99.24%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>54.39%</div>},
      {block: "46-49", "man-power": 56, production: 234, achievement:<MiniCardContainer inc>92.54%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>62.62%</div>},
      {block: "50-55", "man-power": 45, production: 452, achievement:<MiniCardContainer inc>99.24%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>54.39%</div>},
      {block: "56-62", "man-power": 123, production: 531, achievement:<MiniCardContainer inc>96.56%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>57.28%</div>}, 
      {block: "63-69", "man-power": 56, production: 234, achievement:<MiniCardContainer inc>92.54%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>62.62%</div>},
      {block: "70-76", "man-power": 45, production: 452, achievement:<MiniCardContainer inc>99.24%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>54.39%</div>},
      {block: "77-81", "man-power": 152, production: 1535, achievement:<MiniCardContainer inc>97.65%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>56.87%</div>},
      {block: "82-86", "man-power": 45, production: 452, achievement:<MiniCardContainer inc>99.24%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>54.39%</div>},
      {block: "87-91", "man-power": 123, production: 531, achievement:<MiniCardContainer inc>96.56%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>57.28%</div>}, 
      {block: "92-96", "man-power": 152, production: 1535, achievement:<MiniCardContainer inc>97.65%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>56.87%</div>},
      {block: "97-105", "man-power": 56, production: 234, achievement:<MiniCardContainer inc>92.54%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>62.62%</div>},
      {block: "105-114", "man-power": 45, production: 452, achievement:<MiniCardContainer inc>99.24%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>54.39%</div>},


    ],
    []
  )
  
  
  return (
    <SectionContainer>
      <FlexRowBetween>
        <SectionHeading>
          Block Summary
        </SectionHeading>
        <Select value="Yesterday" >
          <Option value="Yesterday">Yesterday</Option>
          <Option value="20 May">20 May</Option>
        </Select>
      </FlexRowBetween>
      <DataGrid
        columns={columns}
        data={data}
        pageSize={4}
        />
      
    </SectionContainer>
  )
}

export default BlockSummary