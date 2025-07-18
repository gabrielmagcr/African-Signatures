const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "signatures");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
const employees = [
  {
    "name": "Tinolla Rodgers",
    "position": "Managing Director",
    "phone": "+264 81 865 3052",
    "email": "tinolla@africanmonarchlodges.com"
  },
  {
    "name": "Yolandi Einbeck",
    "position": "Personal Assistant to Tinolla Rodgers",
    "phone": "+264 81 127 8020",
    "email": "operations@africanmonarchlodges.com"
  },
  {
    "name": "Deonie Meyer",
    "position": "Reservations Manager",
    "phone": "+264 81 125 2122",
    "email": "info@africanmonarchlodges.com"
  },
  {
    "name": "Ernestine Vries",
    "position": "Reservations Consultant",
    "phone": "+264 81 125 2122",
    "email": "reservations@africanmonarchlodges.com"
  },
  {
    "name": "Keenan Collins",
    "position": "Lodge Manager - Nambwa Tented Lodge",
    "phone": "+264 81 865 3053",
    "email": "nambwamanager@africanmonarchlodges.com"
  },
  {
    "name": "Gregory De Vries",
    "position": "Assistant Lodge Manager  - Nambwa Tented Lodge",
    "phone": "+264 81 551 7098",
    "email": "nambwa1@africanmonarchlodges.com"
  },
  {
    "name": "Silvia Hartebees",
    "position": "Lodge Manager - Kazile Island Lodge",
    "phone": "+264 81 145 7399",
    "email": "kazile@africanmonarchlodges.com"
  },
  {
    "name": "Allen Liebenberg",
    "position": "Lodge Admin Manager - Nambwa Tented Lodge",
    "phone": "+264 81 333 4251",
    "email": "nambwa@africanmonarchlodges.com"
  },
  {
    "name": "Olga Blom",
    "position": "Project Manager - The Sijwa Project",
    "phone": "+264 81 216 4401",
    "email": "sijwa@africanmonarchlodges.com"
  }
];


employees.forEach(employee => {
    const fileName = `${employee.name.replace(/\s+/g, '_')}.html`;
    const filePath = path.join(outputDir, fileName);

    const htmlContent =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${employee.name} - Signature</title>
</head>
<body>
    <div class="signature-container" style="display: flex;margin-top: 20px;">
    <div id="content" style="
    padding: 20px 0 23px 33px;
">
 <table cellpadding="0" cellspacing="0" border="0" width="533" style="font-family: Georgia, serif; font-size: 14px; color: #8F8981; max-width: 533px;">

  <tr>
    <td colspan="2" style="text-align: center;">
        <a href="https://www.africanmonarchlodges.com/" target="_blank" style="text-decoration: none;">
      <img src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/07/African-signature-banner.png"
           alt="Banner Elefantes"
           width="500"
           style="display: block;" /></a>
    </td>
  </tr>

  <tr>
    <td width="200" style="width: 200px; padding: 15px 0; text-align: left;">
      <img src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/07/email_logo.png"
           alt="African Monarch Logo"
           width="250"
           style="display: block;" />
    </td>

    <td style="padding: 0px 33px 17px 15px; text-align: right; text-decoration: none;">
               <a href="https://www.facebook.com/AfricanMonarchLodges/" target="_blank" class="btn"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-Facebook-icon.png"
                            width="25"></a>
                    <a href="https://www.instagram.com/africanmonarchlodges/" target="_blank" class="btn"
                        style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-Instagram-icon.png"
                            width="25"></a>
                    <a href="https://za.pinterest.com/africanmonarchlodges" target="_blank" class="btn"
                        style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-Pinterest-icon.png"
                            width="25"></a>
                    <a href="https://www.linkedin.com/company/african-monarch-lodges/"
                        target="_blank" class="btn" style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-LinkedIn-icon.png"
                            width="25"></a>
                    <a href="https://www.youtube.com/@AfricanMonarchLodges" target="_blank" class="btn"
                        style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-YouTube-Icon.png"
                            width="25"></a>
                    <a href="https://api.whatsapp.com/send/?phone=264811252122"
                        target="_blank" class="btn" style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-WhatsApp-Icon.png"
                            width="25"></a>
    </td>
  </tr>

  <tr>
    <td colspan="2" style="padding: 5px 0px;">
      <span style="font-size: 24px; font-family: Georgia;">${employee.name}</span> | <span style="font-family: Arial;">${employee.position}</span><br />
      <div style="padding-top: 10px; font-family: Arial;"><a href="mailto:${employee.email}" style="color: #8F8981; text-decoration: none; margin-right: 10px;">${employee.email}</a><a style="color: #8F8981; text-decoration: none;" href="tel:${employee.phone}">${employee.phone}</a></div>


      <div style="margin-top: 10px;">
        <a href="https://www.africanmonarchlodges.com/stay/nambwa-tented-lodge/" target="_blank" style="color: #D3B88C; text-decoration: none; font-size: 14px; font-family: Arial; font-weight: 700;">Nambwa Tented Lodge |</a> 
        <a href="https://www.africanmonarchlodges.com/stay/kazile-island-lodge/" target="_blank" style="color: #D3B88C; text-decoration: none; font-size: 14px; font-family: Arial; font-weight: 700;">Kazile Island Lodge |</a> 
        <a href="https://www.africanmonarchlodges.com/our-purpose/" target="_blank" style="color: #D3B88C; text-decoration: none; font-size: 14px; font-family: Arial; font-weight: 700;">The Sijwa Project</a>
      </div>
    </td>
  </tr>
</table>

</div>
   <div id="content-2" style="
    background: #000000;
    padding: 20px 0 23px 33px;
">
 <table cellpadding="0" cellspacing="0" border="0" width="533" style="font-family: Georgia, serif; font-size: 14px; color: #8F8981; max-width: 533px;">

  <tr>
    <td colspan="2" style="text-align: center;">
        <a href="https://www.africanmonarchlodges.com/" target="_blank" style="text-decoration: none;">
      <img src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/07/African-signature-banner.png"
           alt="Banner Elefantes"
           width="500"
           style="display: block;" /></a>
    </td>
  </tr>

  <tr>
    <td width="200" style="width: 200px; padding: 15px 0; text-align: left;">
      <img src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/07/email_logo.png"
           alt="African Monarch Logo"
           width="250"
           style="display: block;" />
    </td>

    <td style="padding: 0px 33px 17px 15px; text-align: right; text-decoration: none;">
               <a href="https://www.facebook.com/AfricanMonarchLodges/" target="_blank" class="btn"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-Facebook-icon.png"
                            width="25"></a>
                    <a href="https://www.instagram.com/africanmonarchlodges/" target="_blank" class="btn"
                        style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-Instagram-icon.png"
                            width="25"></a>
                    <a href="https://za.pinterest.com/africanmonarchlodges" target="_blank" class="btn"
                        style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-Pinterest-icon.png"
                            width="25"></a>
                    <a href="https://www.linkedin.com/company/african-monarch-lodges/"
                        target="_blank" class="btn" style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-LinkedIn-icon.png"
                            width="25"></a>
                    <a href="https://www.youtube.com/@AfricanMonarchLodges" target="_blank" class="btn"
                        style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-YouTube-Icon.png"
                            width="25"></a>
                    <a href="https://api.whatsapp.com/send/?phone=264811252122"
                        target="_blank" class="btn" style="margin-left:5px"><img
                            src="https://www.africanmonarchlodges.com/wp-content/uploads/2025/02/AML-WhatsApp-Icon.png"
                            width="25"></a>
    </td>
  </tr>

  <tr>
    <td colspan="2" style="padding: 5px 0px;">
      <span style="font-size: 24px; font-family: Georgia;">${employee.name}</span> | <span style="font-family: Arial;">${employee.position}</span><br />
      <div style="padding-top: 10px; font-family: Arial;"><a href="mailto:${employee.email}" style="color: #8F8981; text-decoration: none; margin-right: 10px;">${employee.email}</a><a style="color: #8F8981; text-decoration: none;" href="tel:${employee.phone}">${employee.phone}</a></div>


      <div style="margin-top: 10px;">
        <a href="https://www.africanmonarchlodges.com/stay/nambwa-tented-lodge/" target="_blank" style="color: #D3B88C; text-decoration: none; font-size: 14px; font-family: Arial; font-weight: 700;">Nambwa Tented Lodge |</a> 
        <a href="https://www.africanmonarchlodges.com/stay/kazile-island-lodge/" target="_blank" style="color: #D3B88C; text-decoration: none; font-size: 14px; font-family: Arial; font-weight: 700;">Kazile Island Lodge |</a> 
        <a href="https://www.africanmonarchlodges.com/our-purpose/" target="_blank" style="color: #D3B88C; text-decoration: none; font-size: 14px; font-family: Arial; font-weight: 700;">The Sijwa Project</a>
      </div>
    </td>
  </tr>
</table>

</div>

</div>
<br><br>
    <span>Step 1</span>
<button style="background-color: greenyellow;border: solid 1px;padding: 10px;border-radius: 12px;" id="btn">Click here to copy</button>
<br><br>

<div class="steps">
    <span >Step 2: Go to <a href="https://mail.google.com/mail" target="_blank">Gmail.com</a> and click on settings</span>

    <img src="./assets/step 2.png" alt="">
    <span>Click on See all settings</span>
    <img src="./assets/step 3.png" alt="">
    <span>Scroll down and click on Create new button</span>
    <img src="./assets/step 4.png" alt="">
    <span>Add name, click on Create</span>
    <img src="./assets/step 5.png" alt="">
    <span>Paste the signature and select it on "For New emails use" and "On reply/forward use" then save changes</span>
    <img src="./assets/step 6.png" alt="">
</div>
</body>

<style>
    body{
        display: flex;
    flex-direction: column;
    align-items: center;

    }
    .steps{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .steps span{
        font-size: 28px;
    }
    


</style>
<script>
    document.getElementById("btn").addEventListener("click", async function() {
        const content = document.getElementById("content").outerHTML;
        
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    "text/html": new Blob([content], { type: "text/html" })
                })
            ]);
            alert("Copied");
        } catch (err) {
            console.error("Error: ", err);
            alert("Error. Ask Gabo");
        }
    });
</script>
</body>
</html>`;

fs.writeFileSync(filePath, htmlContent);
});
