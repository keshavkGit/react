import React from 'react'

function Accordion(props) {
    return (
        <>
   <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Career Objectives:</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
                Looking for an organization which will help me to explore my talent hone, 
                my skills and utilize them in the best possible way for the attainment of their goals.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Key Skills:</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>● UI Designing  </strong> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <strong>● Coding </strong> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 <strong>● Debugging </strong> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 <strong>● Web Development </strong> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
               
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Technical Skills :</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong> Programming Languages:</strong> &nbsp;&nbsp; 
            C++,&nbsp;&nbsp; HTML,&nbsp;&nbsp; CSS,&nbsp;&nbsp; JavaScript  <br/>
            <strong> Frameworks & Libraries:</strong> &nbsp;&nbsp;React,&nbsp;&nbsp; Bootstrap,&nbsp;&nbsp; 
            Redux <br/><strong> Database:</strong> &nbsp;&nbsp; Mysql <br/>
            <strong> Miscellaneous:</strong> &nbsp;&nbsp; MS-Office,&nbsp;&nbsp; Git,&nbsp;&nbsp; NPM

      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <strong>Trainings and Certification:</strong>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>●  Web Development : </strong>&nbsp; &nbsp;&nbsp; 
            Training from Internshala. (June ’15 – July ’26) <br/> <br/> 
            <strong>● C++ :</strong>&nbsp; &nbsp;&nbsp; 
            Training from Numeric Infosystem Pvt. Ltd. (Feb, 2016-Apr, 2016)
   
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <strong> Projects:</strong>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong> Programming Languages:</strong> &nbsp;&nbsp; 
            C++,&nbsp;&nbsp; HTML,&nbsp;&nbsp; CSS,&nbsp;&nbsp; JavaScript  <br/>
            <strong> Frameworks & Libraries:</strong> &nbsp;&nbsp;React,&nbsp;&nbsp; Bootstrap,&nbsp;&nbsp; 
            Redux <br/><strong> Database:</strong> &nbsp;&nbsp; Mysql <br/>
            <strong> Miscellaneous:</strong> &nbsp;&nbsp; MS-Office,&nbsp;&nbsp; Git,&nbsp;&nbsp; NPM

      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
     <strong>Co-Curricular:</strong>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      ● Awarded ‘Cluster’ Level certificate in chemistry exhibition through NVS, 
            Bhopal Region in the year 2010. <br/> <br/> ● Got Scholarship in Madhya Pradesh state’s
             <strong> Mission excellence</strong> Program in 2009.  <br/> <br/>
              ● Participated as a student in the interactive visit to Scientific and 
                Research Institutions of Bengaluru under the “ <strong> 
                Vigyan Manthan Yatra –Mission</strong> &nbsp; &nbsp;&nbsp;<strong> Excellence Programme </strong>” .  <br/><br/>
            ● Participated in Green Olympiad 2010, supported by the Ministry of Environment and Forests, 
              Govt. of India. ",
   
      </div>
    </div>
  </div>
</div>

        </>
    )
} export default Accordion;