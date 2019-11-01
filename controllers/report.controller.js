const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path')
const mongoose = require('mongoose');
const PatientActivity = require('../models/patientActivity.model');
const TotalServiceStatus = require('../models/totalServiceStatus.model');
const LiveStatus = require('../models/liveStatus.model');
const TypeLive = require('../models/typeLive.model');
const TotalPlan = require('../models/totalPlan.model');
const TopPayer = require('../models/topPayer.model');
const Plan = require('../models/plan.model');
const Payer = require('../models/payer.model');
const Coalition = require('../models/coalition.model');
const Reimbursement = require('../models/reimbursement.model')
const US_STATES = require('../constants/states');
const config = require('../config');

const PDF_DIR = './reports/';
const PDF_API = config.PDF_API;
const APP_PATH = config.APP_PATH

var section1_1 = fs.readFileSync('./templates/section1-1.html', 'utf8');
const option1_1 = {
    "orientation": 'landscape',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var section2_1 = fs.readFileSync('./templates/section2-1.html', 'utf8');
const option2_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var section3_1 = fs.readFileSync('./templates/section3-1.html', 'utf8');
const option3_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var section4_1 = fs.readFileSync('./templates/section4-1.html', 'utf8');
const option4_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var section5_1 = fs.readFileSync('./templates/section5-1.html', 'utf8');
const option5_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var section6_1 = fs.readFileSync('./templates/section6-1.html', 'utf8');
const option6_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var detail1_1 = fs.readFileSync('./templates/detail1-1.html', 'utf8');
const option7_1 = {
    "orientation": 'landscape',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var detail2_1 = fs.readFileSync('./templates/detail2-1.html', 'utf8');
const option8_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

var detail3_1 = fs.readFileSync('./templates/detail3-1.html', 'utf8');
const option9_1 = {
    "orientation": 'portrait',
    "format": 'A4',
    "quality": "100",
    "phantomPath": './node_modules/phantomjs/bin/phantomjs',
    "border": {
        "top": "16px",
        "right": "10px",
        "bottom": "10px",
        "left": "10px"
    }
}

const patientReport = (req, res) => {

}

const patientStatisticReport = (req, res) => {
    const {
        medicare_asc_pie,
        medicare_hopd_pie,
        commercial_asc_pie,
        commercial_hopd_pie,
        medicaid_asc_pie,
        medicaid_hopd_pie,
        va_asc_pie,
        medicare_total_pie,
        commercial_total_pie,
        medicaid_total_pie,
        va_total_pie
    } = req.body;
    const fileName = 'national-payer.pdf'

    var template = section1_1;

    template = template.replace(new RegExp('{{medicare_asc_pie}}', 'g'), medicare_asc_pie);
    template = template.replace(new RegExp('{{medicare_hopd_pie}}', 'g'), medicare_hopd_pie);
    template = template.replace(new RegExp('{{commercial_asc_pie}}', 'g'), commercial_asc_pie);
    template = template.replace(new RegExp('{{commercial_hopd_pie}}', 'g'), commercial_hopd_pie);
    template = template.replace(new RegExp('{{medicaid_asc_pie}}', 'g'), medicaid_asc_pie);
    template = template.replace(new RegExp('{{medicaid_hopd_pie}}', 'g'), medicaid_hopd_pie);
    template = template.replace(new RegExp('{{va_asc_pie}}', 'g'), va_asc_pie);
    template = template.replace(new RegExp('{{medicare_total_pie}}', 'g'), medicare_total_pie);
    template = template.replace(new RegExp('{{commercial_total_pie}}', 'g'), commercial_total_pie);
    template = template.replace(new RegExp('{{medicaid_total_pie}}', 'g'), medicaid_total_pie);
    template = template.replace(new RegExp('{{va_total_pie}}', 'g'), va_total_pie);
    // console.log(template)

    pdf.create(template, option1_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        // return res.send()
        res.send({
            status: true,
            data: PDF_API + fileName
        });

        // res.download(APP_PATH + '/pdfs', fileName);

    })
}

const patientTrendReport = (req, res) => {
    const { trend_chart } = req.body;
    const fileName = 'coverage_trend.pdf'
    var template = section2_1;
    template = template.replace(new RegExp('{{trend_chart}}', 'g'), trend_chart);


    pdf.create(template, option2_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        res.send({
            status: true,
            data: PDF_API + fileName
        })
    })
}

const payerCoverageReport = (req, res) => {
    const { active_chart, total_chart, live_chart, type } = req.body;
    const fileName = type + '-payer-coverage' + '.pdf'
    var template = section3_1;
    template = template.replace(new RegExp('{{active_chart}}', 'g'), active_chart);
    template = template.replace(new RegExp('{{total_chart}}', 'g'), total_chart);
    template = template.replace(new RegExp('{{live_chart}}', 'g'), live_chart);

    // Top Ten Data Table Generation
    let main_data = ''
    var query = TopPayer.aggregate([
        {
            $lookup:
            {
                "from": "coalitions",
                "localField": "coalition",
                "foreignField": "_id",
                "as": "payer"
            }
        },
        { $unwind: "$payer" },
        {
            $project:
            {
                "payer._id": 0
            }
        },
        { $match: { "type": type.toLowerCase() } }])

    query.exec((err, data) => {
        if (err) {
            main_data = `<p>There is error generating the Top Data</p>`
        }
        if (data) {
            let table_content = ``
            data.forEach(e => {
                let row = `
                <tr>
                    <td>
                        ${e.payer.name}
                    </td>
                    <td>
                        ${e.lives} lives
                    </td>
                    <td>
                        ${e.status}% active
                    </td>
                </tr>
                `
                table_content += row;
            })
            main_data = `<table class="${type}">
                <thead>
                    <tr>
                        <th>Payer / PBM</th>
                        <th># of lives(in 100k)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${table_content}
                </tbody>
            </table>`;
        }
        else {
            main_data = `<p>There is No Data</p>`
        }


        template = template.replace(new RegExp('{{main_data}}', 'g'), main_data);
        template = template.replace(new RegExp('{{type}}', 'g'), type);
        pdf.create(template, option3_1).toFile(PDF_DIR + fileName, function (err, result) {
            if (err) return res.status(500).send({ status: false, error: err });
            res.send({
                status: true,
                data: PDF_API + fileName
            })
        })
    })    
}

const payerCoverageDetailReport = async(req, res) => {
    const { type, coalition, payer, template_no } = req.body;
    const fileName = `${type} payer detail(${payer})` + '.pdf'
    
    var template = detail1_1;

    var query = Payer.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer" },
        {   $match: 
                {
                    "type": type.toLowerCase(),
                    "coalition": mongoose.Types.ObjectId(coalition)
                }
        },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }
        ]);
    let data = await query.exec();
    let exist_states = [];
    let state_html = ''
    let detail_html = ''
    data.forEach(e => {
        let state = `
            <div class="state ${US_STATES[e.state]}">
                <span class="state">${US_STATES[e.state]}</span>
                <span class="active status"><span class="legend"></span>${e.active}</span>
                <span class="pending status"><span class="legend"></span>${e.pending}</span>
                <span class="inactive status"><span class="legend"></span>${e.inactive}</span>
            </div>
        `
        let detail = `
            <tr>
                <td>${e.payer.name}</td>
                <td>${e.state}</td>
                <td>${e.effective_date}</td>
                <td>${e.medicare_flag == 1 ? 'Yes' : e.medicare_flag == 0 ? "No" : e.medicare_flag == -1 ? "TBD" : ""}</td>
                <td>${e.medicaid_flag == 1 ? 'Yes' : e.medicaid_flag == 0 ? "No" : e.medicaid_flag == -1 ? "TBD" : ""}</td>
                <td>${e.commercial_flag == 1 ? 'Yes' : e.commercial_flag == 0 ? "No" : e.commercial_flag == -1 ? "TBD" : ""}</td>
                <td>${e.work_flag == 1 ? 'Yes' : e.work_flag == 0 ? "No" : e.work_flag == -1 ? "TBD" : ""}</td>
                <td>${e.reimbursement}</td>
                <td>${e.criteria}</td>
                <td>${e.comment}</td>
                <td>${e.coverage_policy}</td>
            </tr>
        `
        state_html += state;
        detail_html += detail;
        exist_states.push(e.state);
    })

    for( let key in US_STATES ){
        if( exist_states.indexOf(key) < 0 ){
            let state = `
                <div class="state ${US_STATES[key]}">
                    <span class="state">${US_STATES[key]}</span>
                </div>
            `
            state_html += state;
        }
    }

    let detail_table_html = `
        <table class="${type}">
            <thead>
                <tr>
                    <th>Health Plan Name</th>
                    <th>Region</th>
                    <th>Effective Date</th>
                    <th>Medicare Plan(Y/N)</th>
                    <th>Medicaid (Y/N)</th>
                    <th>Commercial (Y/N)</th>
                    <th>Work Comp (Y/N)</th>
                    <th>Reimbursement Amount</th>
                    <th>Criteria</th>
                    <th>Comments</th>
                    <th>Coverage Policy</th>
                </tr>
            </thead>
            <tbody>
        `
        + detail_html + 
        `
            </tbody>
        </table>
    `
    template = template.replace(new RegExp('{{type}}', 'g'), type);
    template = template.replace(new RegExp('{{payer}}', 'g'), payer);
    template = template.replace(new RegExp('{{states}}', 'g'), state_html);
    template = template.replace(new RegExp('{{table_data}}', 'g'), detail_table_html);

    // data.forEach(e => {
    //     console.log("State Data", e);
    // })

    pdf.create(template, option7_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        res.send({
            status: true,
            data: PDF_API + fileName
        })
    })
}

const dentalPayerCoverageDetailReport = async(req, res) => {
    const { type, coalition, payer, template_no } = req.body;
    const fileName = `${type} payer detail(${payer})` + '.pdf'
    
    var template = detail2_1;

    var query = Payer.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer" },
        {   $match: 
                {
                    "type": type.toLowerCase(),
                    "coalition": mongoose.Types.ObjectId(coalition)
                }
        },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }
        ]);
    let data = await query.exec();    
    let detail_html = ''
    data.forEach(e => {        
        let detail = `
            <tr>
                <td>${e.payer.name}</td>
                <td>${e.state}</td>
                <td>${e.effective_date}</td>
                <td>${e.reimbursement}</td>
                <td>${e.criteria}</td>
                <td>${e.comment}</td>
            </tr>
        `
        detail_html += detail;
    })

    let detail_table_html = `
        <table class="${type}">
            <thead>
                <tr>
                    <th>Health Plan Name</th>
                    <th>Region</th>
                    <th>Effective Date</th>
                    <th>Reimbursement Amount</th>
                    <th>Criteria</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
        `
        + detail_html + 
        `
            </tbody>
        </table>
    `
    template = template.replace(new RegExp('{{type}}', 'g'), type);
    template = template.replace(new RegExp('{{payer}}', 'g'), payer);
    template = template.replace(new RegExp('{{table_data}}', 'g'), detail_table_html);

    // data.forEach(e => {
    //     console.log("State Data", e);
    // })

    pdf.create(template, option8_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        res.send({
            status: true,
            data: PDF_API + fileName
        })
    })   

}

const payerPlanReport = (req, res) => {
    const { chart, type, category, total_status } = req.body;
    const fileName = `${type} ${category} payer plans`+'.pdf'
    var template = section4_1;

    template = template.replace(new RegExp('{{chart}}', 'g'), chart);
    template = template.replace(new RegExp('{{type}}', 'g'), type);
    template = template.replace(new RegExp('{{category}}', 'g'), category);
    template = template.replace(new RegExp('{{total_status}}', 'g'), total_status);

    var query = Plan.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer"   },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }, 
        {$match: {"type" : type.toLowerCase(), "category": category.toLowerCase()}}])
    let table_data = ''
    query.exec((err, data) => {
        if (err) {
            table_data = `<p>There is error generating the Payer Plan Data</p>`
        }
        if (data) {
            let table_content = ``
            data.forEach(e => {
                let status = '';
                if( type.toLowerCase() != 'dental' ) {
                    status = `
                    <td>
                        ${e.asc_flag ? 'Yes' : 'No'}
                    </td>
                    <td>
                        ${e.hopd_flag ? 'Yes' : 'No'}
                    </td>
                    `
                }
                let row = `
                <tr>
                    <td>
                        ${e.payer.name}
                    </td>
                    <td>
                        ${e.plan} plans
                    </td>
                `
                + status +
                `
                    <td>
                        ${e.status}% active
                    </td>
                </tr>
                `
                table_content += row;
            })
            table_data = `<table class="${type}">
                <thead>
                    <tr>
                        <th>Payer / PBM</th>
                        <th># of plans</th>
                        ${ type.toLowerCase() != 'dental' ? '<th>ASC Coverage</th><th>HOPD Coverage</th>' : ''}
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${table_content}
                </tbody>
            </table>`;
        }
        else {
            table_data = `<p>There is No Data</p>`
        }

        template = template.replace(new RegExp('{{table_data}}', 'g'), table_data);
        pdf.create(template, option4_1).toFile(PDF_DIR + fileName, function (err, result) {
            if (err) return res.status(500).send({ status: false, error: err });
            res.send({
                status: true,
                data: PDF_API + fileName
            })
        })
    })   
}

const payerPlanDetailReport = async(req, res) => {
    const { type, category, payer, coalition } = req.body;
    const fileName = `${payer} ${type} ${category} payer plans`+'.pdf'

    var template = detail3_1;
    const query = Payer.find({ type: type.toLowerCase(), coalition: coalition });

    let data = await query.exec();
    let exist_states = [];
    let state_html = ''
    data.forEach(e => {
        let active = 0;
        let inactive = 0;
        let pending = 0;
        if( category.toLowerCase() == 'commercial' ){
            active = e.commercial_active_plan
            inactive = e.commercial_inactive_plan
            pending = e.commercial_pending_plan
        }
        if( category.toLowerCase() == 'medicaid' ){
            active = e.medicaid_active_plan
            inactive = e.medicaid_inactive_plan
            pending = e.medicaid_pending_plan
        }
        let state = `
            <div class="state ${US_STATES[e.state]}">
                <span class="state">${US_STATES[e.state]}</span>
                <span class="active status"><span class="legend"></span>${active}</span>
                <span class="pending status"><span class="legend"></span>${pending}</span>
                <span class="inactive status"><span class="legend"></span>${inactive}</span>
            </div>
        `
        state_html += state;
        exist_states.push(e.state);
    })

    for( let key in US_STATES ){
        if( exist_states.indexOf(key) < 0 ){
            let state = `
                <div class="state ${US_STATES[key]}">
                    <span class="state">${US_STATES[key]}</span>
                </div>
            `
            state_html += state;
        }
    }

    template = template.replace(new RegExp('{{type}}', 'g'), type);
    template = template.replace(new RegExp('{{payer}}', 'g'), payer);
    template = template.replace(new RegExp('{{category}}', 'g'), payer);
    template = template.replace(new RegExp('{{states}}', 'g'), state_html);

    pdf.create(template, option7_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        res.send({
            status: true,
            data: PDF_API + fileName
        })
    })
}

const dentalReport = (req, res) => {

}

const dentalStatisticReport = (req, res) => {
    const {
        medicare_dental_pie,
        commercial_dental_pie,
        medicaid_dental_pie,
        medicare_total_pie,
        commercial_total_pie,
        medicaid_total_pie
    } = req.body;
    const fileName = 'Dental Statistic.pdf'

    var template = section5_1;

    template = template.replace(new RegExp('{{medicare_dental_pie}}', 'g'), medicare_dental_pie);
    template = template.replace(new RegExp('{{commercial_dental_pie}}', 'g'), commercial_dental_pie);
    template = template.replace(new RegExp('{{medicaid_dental_pie}}', 'g'), medicaid_dental_pie);
    template = template.replace(new RegExp('{{commercial_total_pie}}', 'g'), commercial_total_pie);
    template = template.replace(new RegExp('{{medicare_total_pie}}', 'g'), medicare_total_pie);
    template = template.replace(new RegExp('{{medicaid_total_pie}}', 'g'), medicaid_total_pie);

    pdf.create(template, option5_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        // return res.send()
        res.send({
            status: true,
            data: PDF_API + fileName
        });
    })
}

const surgeryCenterReport = async(req, res) => {
    const {
        out_asc_surgery,
        out_hopd_surgery,
        in_patient_surgery,
        in_va_surgery
    } = req.body;
    const fileName = 'Surgery Center.pdf'

    var template = section6_1;

    template = template.replace(new RegExp('{{out_asc_surgery}}', 'g'), out_asc_surgery);
    template = template.replace(new RegExp('{{out_hopd_surgery}}', 'g'), out_hopd_surgery);
    template = template.replace(new RegExp('{{in_patient_surgery}}', 'g'), in_patient_surgery);
    template = template.replace(new RegExp('{{in_va_surgery}}', 'g'), in_va_surgery);

    const type = "surgery";
    const category = "system";

    var query = Plan.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer"   },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }, 
        {$match: {"type" : type, "category": category}}])

    var query1 = Plan.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer"   },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }, 
        {$match: {"type" : type, "category": 'institution'}}]);

    var data1 = await query.exec()
    var data2 = await query1.exec();

    var table_content = ''
    data1.forEach(e => {
        let row = `
            <tr>
                <td>
                    ${e.payer.name}
                </td>
                <td>
                    ${e.plan}
                </td>
                <td>
                    ${e.status ? 'Active' : 'No'}
                </td>
            </tr>
        `;
        table_content += row;
    })

    let table_data1 = `
        <table>
            <thead>
                <tr>
                    <th>
                    Institution
                    </th>
                    <th>
                    # of lives (in 100k)
                    </th>
                    <th>
                    Status
                    </th>
                </tr>
            </thead>
            <tbody>
    `
    + table_content + 
    `
            </tbody>
        </table>
    `

    table_content = '';
    data2.forEach(e => {
        let row = `
            <tr>
                <td>
                    ${e.payer.name}
                </td>
                <td>
                    ${e.plan}
                </td>
                <td>
                    ${e.status ? 'Active' : 'No'}
                </td>
            </tr>
        `
        table_content += row;
    })
    let table_data2 = `
        <table>
            <thead>
                <tr>
                    <th>
                    Institution
                    </th>
                    <th>
                    # of lives (in 100k)
                    </th>
                    <th>
                    Status
                    </th>
                </tr>
            </thead>
            <tbody>
    `
    + table_content + 
    `
            </tbody>
        </table>
    `

    template = template.replace(new RegExp('{{table_data1}}', 'g'), table_data1);
    template = template.replace(new RegExp('{{table_data2}}', 'g'), table_data2);

    pdf.create(template, option6_1).toFile(PDF_DIR + fileName, function (err, result) {
        if (err) return res.status(500).send({ status: false, error: err });
        res.send({
            status: true,
            data: PDF_API + fileName
        });
    })
}

module.exports = {
    patientReport,
    patientStatisticReport,
    patientTrendReport,
    payerCoverageReport,
    payerCoverageDetailReport,
    dentalPayerCoverageDetailReport,
    payerPlanReport,
    payerPlanDetailReport,
    dentalReport,
    dentalStatisticReport,
    surgeryCenterReport
}

