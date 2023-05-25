/** @jsxImportSource @emotion/react */
import React from 'react'
import { Coln, FlexCol, FlexColCenter, FlexRow, FlexRowBetween, FlexRowCenter, MiniCardContainer, SectionContainer } from '../ui-components/atoms/container'
import { Caption, ComparisonText, H2, PrimaryHeading1, PrimaryHeading3, SectionHeading, Sub } from '../ui-components/atoms/text'
import { Container, Row } from 'react-grid-system'
import { css } from '@emotion/react'
import { Option, Select } from '../ui-components/atoms/input'
import GaugeChart from '../ui-components/molecules/GaugeChart'


const SewingAtaGlance = () => {
  return (
    
      
          <SectionContainer>
            <FlexRowBetween>
              <SectionHeading>
                Sewing At a Glance
              </SectionHeading>
              <Select value="Yesterday" >
                <Option value="Yesterday">Yesterday</Option>
                <Option value="20 May">20 May</Option>
              </Select>
            </FlexRowBetween>
            <div css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height:80%;
            `}>
              <div css={css`
                display: flex;
                justify-content: space-evenly;
                padding: 10px;
              `}>
                <div css={css`
                padding: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                `}>
                  <GaugeChart
                  oR={30}
                  value={43}
                  stroke={10}
                  />
                  <PrimaryHeading1>43.34%</PrimaryHeading1>
                  <div css={css`padding: 5px;`} />
                  <Caption>Efficiency</Caption>
                </div>
                
                <div css={css`
                padding: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                `}>
                  <MiniCardContainer inc>
                    <ComparisonText inc >^ 2.34%</ComparisonText>
                  </MiniCardContainer>
                  <PrimaryHeading1>76092</PrimaryHeading1>
                  <div css={css`padding: 5px;`} />
                  <Caption>Production</Caption>
                </div>
              </div>
              
              <div css={css`
                display: flex;
                justify-content: space-evenly;
              `}>
                <div css={css`
                  display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                `}>
                  <PrimaryHeading3>
                    3567
                  </PrimaryHeading3>
                  <Caption>
                    Man Power
                  </Caption>
                </div>
                <div css={css`border-left: 6px solid lightgray;height: 50px; border-radius: 3px; opacity:30%;`} />
                <div css={css`
                  display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;`} >
                <PrimaryHeading3>
                    72628
                  </PrimaryHeading3>
                  <Caption>
                  Target
                  </Caption>
                </div>
                <div css={css`border-left: 6px solid lightgray;height: 50px; border-radius: 3px; opacity:30%;`} />
                <div css={css`
                  display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;`}>
                <PrimaryHeading3>
                98.63%
                  </PrimaryHeading3>
                  <Caption>
                  Achievement
                  </Caption>
                </div>
              </div>
            </div>
          </SectionContainer>
      
      
    
  )
}

export default SewingAtaGlance