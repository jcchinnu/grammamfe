import React,{Component} from 'react';
import './scheme.css'
class Scheme extends Component{
    render(){
        const divstyle={
            textDecoration:'underline'}
         const psty={
            margin:'0'
        }
        const imgsty={
            float:'right'
        }
        return(
            <div className="scheme" >
                <br/>
                <h3 style={divstyle}>Crop Insurance Scheme's:</h3>
                <h4>Pradhan Mantri Fasal Bima Yojana:</h4>
                <p style={psty}> <img src={require('./10.jpg')} height={"50%"} width={"25%"} style={imgsty}/>
    The new Crop Insurance Scheme is in line with One Nation – One Scheme theme. It incorporates the best features of all previous schemes and at the same time, all previous shortcomings/weaknesses have been removed.
</p><h4>
                The highlights of this scheme are as under: </h4>
                <ul>
                    <li>There will be a uniform premium of only 2% to be paid by farmers for all Kharif crops and 1.5% for all Rabi crops. In case of annual commercial and horticultural crops, the premium to be paid by farmers will be only 5%. The premium rates to be paid by farmers are very low and balance premium will be paid by the Government to provide full insured amount to the farmers against crop loss on account of natural calamities.</li>
                <li>There is no upper limit on Government subsidy. Even if balance premium is 90%, it will be borne by the Government.</li>
               <li>Earlier, there was a provision of capping the premium rate which resulted in low claims being paid to farmers. This capping was done to limit Government outgo on the premium subsidy. This capping has now been removed and farmers will get claim against full sum insured without any reduction.</li>
               <li>The use of technology will be encouraged to a great extent. Smart phones will be used to capture and upload data of crop cutting to reduce the delays in claim payment to farmers. Remote sensing will be used to reduce the number of crop cutting experiments.</li>
                </ul>
                <h3 style={divstyle}>Pension Scheme's for old age:</h3>
                <h4>National Social Assistance Programme (NSAP):
                </h4>
                <p style={psty}> <img src={require('./11.jpg')} height={"50%"} width={"25%"} style={imgsty}/>National Social Assistance Programme (NSAP) provides social assistance benefits to poor households in India such as old age person, widow and disability person. NSAP key objective is to ensure social protection to its beneficiaries in India.</p>
                <h4>Features of Indira Gandhi National Old Age Pension Scheme:</h4>
                <ul>
                    <li>Under IGNOAP scheme, senior citizens of India will receive monthly pension.</li>
                    <li>Indira Gandhi National Old Age Pension Scheme is a non-contribution pension. It means that the beneficiary does not have to contribute any amount to receive the pension.</li>
                </ul>
                <h4>Eligibility Criteria:</h4>
                <ul>
                    <li>The age of the applicant should be 60 years or higher. (It is applicable for both male & female).</li>
                    <li>Applicant must belong to household living below poverty line according to the criteria prescribed by the Government.</li>
                    <li>Applicant must be destitute and having no regular source of financial support form family members or any other sources is eligible for old age pension.</li>
               <li>BPL widows and BPL persons with severe and multiple disabilities in the age group of 60 -79 years are not eligible for this scheme.</li>
                </ul>
                <h3 style={divstyle}>Subsidy scheme's:</h3>
                <h4>Dairy Entrepreneurship Development Scheme:
                </h4>
                <p style={psty}> <img src={require('./13.jpg')} height={"50%"} width={"25%"} style={imgsty}/>The Department of Animal Husbandry, Dairying and Fisheries (DAHD&F), GoI launched a pilot scheme titled “Venture Capital Scheme for Dairy and Poultry” in the year 2005-06.  The main objective of the scheme was to extend assistance for setting up small dairy farms and other components to bring structural changes in the dairy sector.</p>
                <h4>Objectives of the scheme:</h4>
                <ul>
                    <li>To promote setting up of modern dairy farms for production of clean milk.</li>

                    <li>To bring structural changes in the unorganised sector so that initial processing of milk can be taken up at the village level itself</li>
                <li>To upgrade the quality and traditional technology to handle milk on a commercial scale .</li>
                </ul>
                <h4>Who can benefit from this scheme?</h4>
                <ul>
                    <li>Farmers, individual entrepreneurs, NGOs, companies, groups of organised and unorganised sectors, etc. Groups of organised sector include Self-help Groups (SHGs), dairy cooperative societies, milk unions, milk federations, etc. </li>
               <li>More than one member of a family can be assisted under the scheme provided they set up separate units with separate infrastructure at different locations. The distance between the boundaries of two such farms should be at least 500 metres.</li>
                </ul>
                <h4>National Livestock Mission</h4>
                <p style={psty}>National Livestock Mission is an initiative of the Ministry of Agriculture and Farmers’ Welfare. The mission, which commenced from 2014-15, has the objective of sustainable development of the livestock sector.

                    NABARD is the subsidy channelizing agency under Entrepreneurship Development & Employment Generation (EDEG) component of National Livestock Mission. This includes:</p>

<ul>
    <li>Poultry Venture Capital Fund (PVCF)
    </li><li>Integrated Development of Small Ruminants and Rabbit (IDSRR)</li>
<li>Pig Development (PD)</li>
    <li>Salvaging and Rearing of Male Buffalo Calves (SRMBC)  </li>
</ul>
                <h4>Who can benefit from this scheme?</h4>
                <p style={psty}>Farmers, Individuals Entrepreneurs, NGOs, Companies, Cooperatives, groups of organized and unorganized sector which include Self- Help Groups (SHGs) and Joint Liability Groups (JLGs)</p>
            </div>

        )
    }
}
export default Scheme;