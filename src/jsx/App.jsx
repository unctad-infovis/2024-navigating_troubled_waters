import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import ChartContainer from './components/ChartContainer.jsx';
import Video from './components/Video.jsx';

function App() {
  useEffect(() => {

  }, []);

  return (
    <div className="app">
      <div className="header_container">
        <div className="content_container">
          <h2 className="title">Navigating Troubled Waters</h2>
          <h3 className="subtitle">Impact to Global Trade of Disruption of Shipping Routes in the Red Sea, Black Sea and Panama Canal</h3>
          <h4>Unctad Rapid Assessment</h4>
          <h4 className="date">February 2024</h4>
          <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-navigating_troubled_waters' : '.'}/assets/img/2024-navigating_troubled_waters-min.png`} alt="" />
          <div className="bottom">
            <div className="flex">
              <div className="unctad_logo_container">
                <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo_white.svg" alt="UNCTAD logo" />
              </div>
              <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0" />
                <path className="a2" d="M0 20 L30 52 L60 20" />
                <path className="a3" d="M0 40 L30 72 L60 40" />
              </svg>
              <div className="content_container">
                <p>The boundaries and names shown and the designations used on this map do not imply official endorsement or acceptance by the United Nations.</p>
                <p>Mention of any firm or licensed process does not imply the endorsement of the United Nations.</p>
              </div>
              <div className="button_container"><a href="#anchor_download" className="button">Download the report in PDF</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_container">
        <h4>The magnitude of overlapping shipping disruptions</h4>
        <p>For the first time, the world faces simultaneous disruptions in two major global maritime trade waterways, with far-reaching implications for inflation and food and energy security.</p>
        <p>Since November 2023, escalating attacks on ships in the Red Sea have been compounding disruptions in the Black Sea caused by the war in Ukraine and in the Panama Canal due to climate-induced droughts.</p>
      </div>
      <div className="chart_container">
        <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-navigating_troubled_waters' : '.'}/assets/img/2024-navigating_troubled_waters_photo.jpg`} alt="" />
        <h6>© Shutterstock/byvalet | A container ship passes through the Suez Canal.</h6>
      </div>
      <div className="content_container">
        <p>The drop in monthly transits underscores the magnitude of overlapping shipping disruptions.</p>
        <p>In both the Suez and Panama canals, transits are down by more than 40% compared to their peaks. Most of the decline in the Suez Canal occurred over the last two months, while transits through the Panama Canal have been decreasing over the last two years.</p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="Z3MaD" />
      </div>
      <div className="content_container">
        <p>The Suez Canal enables a more direct route for shipping between Europe and Asia, without having to circumnavigate the African continent.</p>
        <p>
          In 2023, approximately 22% of global seaborne container trade passed through the canal
          <sup title="MDS Transmodal, January 2024.">1</sup>
          , carrying
          {' '}
          <strong>goods including natural gas, oil, cars, raw materials and many manufactured products and industry components</strong>
          {' '}
          to and from the Indian Ocean, the Mediterranean Sea and the Atlantic Ocean.
        </p>
        <p>
          Given the risk of attack in the Red Sea, many ships are now avoiding the canal, opting for a longer route around Africa. By the first half of February 2024, 586 container vessels had been rerouted
          <sup title="Clarksons Research, 12 February 2024.">2</sup>
          , while container tonnage crossing the canal fell by 82%
        </p>
      </div>
      <div className="chart_container">
        <h4>Shift in container shipping routes from the Suez Canal to the Cape of Good Hope</h4>
        <h5>Container vessels above 13500 20-foot equivalent units (TEU), 1 December 2023–15 February 2024</h5>
        <h6>
          <Video />
          <em>Source:</em>
          {' '}
          <span>Marine Benchmark.</span>
        </h6>
      </div>
      <div className="content_container">
        <h4>Climate-induced drought disrupts the Panama Canal</h4>
        <p>Facing alarmingly low water levels, the Panama Canal Authority has reduced daily transits from an average of 36 to 22, with plans for further reductions to 18 per day by February 2024. The Panama Canal is particularly important for countries on the West Coast of South America.</p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="w3tl7" />
      </div>
      <div className="content_container">
        <p>To avoid long waiting times, vessels were rerouted through the Suez Canal for cargo originating from Asia, increasing Suez transits before the current Red Sea crisis. The disruptions in the Panama Canal have increased demand for rail and road transport services in recent weeks, as shippers no longer have the option of rerouting through the Suez Canal.</p>
        <h4>Red Sea and Suez Canals interrupted: Impacts and implications</h4>
        <p>
          The Suez Canal is a major source of foreign currency revenue for Egypt, contributing $9.4 billion in the fiscal year 2022/23, about 2.3% of the country’s GDP. The Red Sea crisis has reportedly triggered a 40% drop in Suez Canal revenues
          <sup title="See https://www.porttechnology.org/news/red-sea-crisis-triggers-40-per-cent-drop-in-suez-canal-revenues/">3</sup>
          . A deteriorating situation in Egypt could have negative spillover effects for other countries in the region, such as Ethiopia and the Sudan.
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="e47CP" />
      </div>
      <div className="content_container">
        <h4>Ship rerouting increases distances and shifts operations</h4>
        <p>
          The war in Ukraine has exacerbated the trend of increasing distances for maritime cargo, particularly for the oil and grain trades.
          <sup title="UNCTAD (2023). Review of Maritime Transport 2023.">5</sup>
        </p>
        <p>
          In other shipping markets, more oil tankers are now also rerouting through the Cape of Good Hope. The number of specialized car-carrying ships using the Red Sea dropped by more than half in December 2023 compared with December 2022. And practically no liquified natural-gas carrying vessels are currently using the Suez Canal, causing a spike in gas prices.
          <sup title="Drewry Maritime Research Container Forecaster Q4, 2023." />
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="OUe3i" />
      </div>
      <div className="content_container">
        <p>The latest data for the first quarter of 2024 shows how container shipping capacity is being redeployed away from Gulf countries and introducing more services, including from and to Africa.</p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="6lNgF" />
      </div>
      <div className="content_container">
        <h4>Vessel speed and carbon emissions increase</h4>
        <p>The disruption in the Red Sea and Suez Canal, combined with factors linked to the Panama Canal and the Black Sea, could erode the environmental gains achieved through “slow steaming”, as rerouted vessels increase speeds to cover longer distances.</p>
        <p>This is particularly evident among container ships, where a 1% increase in speed typically leads to a 2.2% rise in fuel consumption. For example, accelerating from 14 to 16 knots increases fuel use per mile by 31%.</p>
        <p>As a result, the longer distances caused by rerouting from the Suez Canal to the Cape of Good Hope imply a 70% increase in greenhouse gas emissions for a round trip from Singapore to Northern Europe.</p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="s3eeJ" />
      </div>
      <div className="content_container">
        <h4>Shipping costs and rates surge</h4>
        <p>Impacts on freight rates have varied across market segments, with container shipping handling consumer and manufactured goods facing the sharpest increases.</p>
        <p>Container freight rates on Asia–Pacific to Europe routes have risen sharply since November 2023. A record weekly spike of $500 was observed in the last week of December 2023. Average container shipping spot rates from Shanghai in early February 2024 more than doubled – up by 122% compared to early December 2023. The rates from Shanghai to Europe more than tripled, jumping by 256%.</p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="8a2lx" />
      </div>
      <div className="content_container">
        <p>While freight rate increases have been relatively higher on routes crossing the Suez, the repercussions extend to distant locations, such as routes linking Asia to the United States West Coast, where rates have surged by 130% since early November. The West Coast provides an alternative route using rail to reach destinations in central and eastern United States.</p>
        <p>Meanwhile, freight rates to other destinations have seen lower increases.</p>
      </div>
      <div className="chart_container">
        <ChartContainer chart_id="7DLis" />
      </div>
      <div className="content_container">
        <h4>Way forward</h4>
        <p>While the combined impact of these disruptions has not yet matched the scale of the pandemic-induced logistical crisis of 2021–2022, UNCTAD is closely monitoring the situation.</p>
        <p>The war in Ukraine has already shown how longer distances and higher freight rates can affect food prices.</p>
        <p>Going forward, it will be important to continue to monitor key developments and assess their potential implications for transport and trade, especially for developing countries. Key issues to track include shipping schedules and service reliability, security measures for ships and ports, delays in shipments and delivery timelines, increased freight rates and insurance premiums, shipping connectivity and the overall geography of trade.</p>
      </div>
    </div>
  );
}

export default App;
