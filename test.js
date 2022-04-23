function rewriteNotionImages(html) {
  const cheerio = require("cheerio");
  const $ = cheerio.load(html);

  $("img").each(function (i, elm) {
    const src = $(this).attr("src");
    $(this).attr("src", src.split("/")[1] + "/" + src.split("/")[1]);
  });
  console.log($.html());
}

var AdmZip = require("adm-zip");

const download = require("download");
const fs = require("fs");
async function main() {
  fs.writeFileSync(
    "my.zip",
    await download(
      "https://s3.us-west-2.amazonaws.com/temporary.notion-static.com/Export-9eb2903a-d752-4058-9362-e745ed9af600.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220421T214035Z&X-Amz-Expires=604800&X-Amz-Signature=06fc663bcc0e0f659eaf8c39aa134292ee15229c0128b6b61f0cb193b68022a2&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%20%3D%22Export-9eb2903a-d752-4058-9362-e745ed9af600.zip%22&x-id=GetObject"
    )
  );
  var zip = new AdmZip("./my.zip");
  var zipEntries = zip.getEntries();
  zipEntries.forEach(function (zipEntry) {
    if (
      zipEntry.entryName.includes(".jpeg") ||
      zipEntry.entryName.includes(".png")
    ) {
      var newName = zipEntry.entryName.split("/")[1];
      zip.extractEntryTo(
        zipEntry.entryName,
        __dirname + ".../_site/" + newName,
        /*maintainEntryPath*/ false,
        /*overwrite*/ true
      );
    }
  });
}
main();
