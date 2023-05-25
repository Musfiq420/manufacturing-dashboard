import React from 'react'
import { ComparisonContainer, FlexRowBetween, MiniCardContainer, SectionContainer } from '../ui-components/atoms/container'
import { SectionHeading } from '../ui-components/atoms/text'
import { Option, Select } from '../ui-components/atoms/input'
import DataGrid from '../ui-components/molecules/Datagrid'

const DeptSummary = () => {


  const columns = React.useMemo(
    () => [
      {
        Header: 'Department',
        accessor: 'dept', // accessor is the "key" in the data
        filter: true
      },
      {
        Header: 'Target',
        accessor: 'target', // accessor is the "key" in the data
        filter: false
      },
      {
        Header: 'Production',
        accessor: 'production',
        filter: false
      },
      
      {
        Header: 'Comparison',
        accessor: 'comparison',
        filter: false
      },
      
      {
        Header: 'Efficiency',
        accessor: 'efficiency',
        filter: false
      }
    ],
    []
  )



  const data = React.useMemo(
    () => [
      {dept: "Cutting", target: 1527, production: 1535, comparison:<MiniCardContainer inc>+1.65%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>62.37%</div>},
      {dept: "Embroidery", target: 834, production: 827, comparison:<MiniCardContainer dec>-0.34%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>52.34%</div>},
      {dept: "Printing", target: 826, production: 735, comparison:<MiniCardContainer inc>+2.34%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>48.63%</div>},
      {dept: "Finishing", target: 1934, production: 1937, comparison:<MiniCardContainer dec>-0.28%</MiniCardContainer>, efficiency: <div style={{color:"#0C9C00", fontWeight:"bold"}}>64.47%</div>}
    ],
    []
  )
  
  
  return (
    <SectionContainer>
      <FlexRowBetween>
        <SectionHeading>
          Dept Summary
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
      
      {/* <Table 
        columns={columns}
        data={data}
        pageSize={4}
        /> */}
    </SectionContainer>
  )
}

export default DeptSummary