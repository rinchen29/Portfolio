import certificateStyle from "../styles/certificate.module.css"
const Certificate = () => {
  return (
    <div className={certificateStyle.certificate}>
       <a href="https://ninjasfiles.s3.amazonaws.com/certificate_8b3de25873980d68_1e2d05efdc78776cb93649143264cdf8.pdf">Front End</a>
       <a href="https://ninjasfiles.s3.amazonaws.com/certificate_f2500d5786174e71_629210812fe430b3b89903815eabd177.pdf">Back End</a>
       <a href="https://ninjasfiles.s3.amazonaws.com/certificate36158314cc7b5e098faf373b2c47c2392ffc1f6.pdf">Java(Basic)</a>
       <a href="/src/assets/eazyByts.pdf" target="_blank">EazyByts(MERN Intern)</a>
       <a href="/src/assets/LOR.pdf" target="_blank">EazyByts(LOR)</a>
    </div>
  )
}

export default Certificate
