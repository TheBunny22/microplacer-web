$(document).ready(function () {
  let order_Items = {
    baseMaterial: "fr",
    layer: 1,
    dimensionX: 20,
    dimensionY: 20,
    quantity: 5,
    delivery_format: "Single",
    panel_column: 0,
    panel_row: 0,
    thickness: 1.6,
    color: "green",
    surface_finish: "HASL (with Lead)",
    outer_copper: "1 oz",
    gold_finger: "no",
    castellated_holes: "no",
    remark: "",
  };
 
  $("#qt-pop").toggle();
  $("#pf-in").hide();

  const errorbox = $("#errorPopup");

  const errorContent = (error, msg) => {
    if (error) {
      return `<div class="popup-content">
                 <span class="close" onclick="closePopup()">&times;</span>
                 <p>Error: ${msg}</p>
              </div>`;
    } else {
      return `<div class="popup-content">
                <span class="close" onclick="closePopup()">&times;</span>
                <p>Success: ${msg}</p>
              </div>`;
    }
  };

  // file upload clicker
  $("#file-bt").on("click", function () {
    // Clicking on item1 triggers a click on item2
   
    $("#gerberFile").trigger("click");
  });

  $("#gerberFile").on("change", function (event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("File selected:", selectedFile);
  
      // Check if the file is in zip or gerber format
      const fileName = selectedFile.name.toLowerCase();
      const isZip = fileName.endsWith('.zip');
      const isGerber = fileName.endsWith('.gtl') || fileName.endsWith('.gbl') || fileName.endsWith('.gbs') || fileName.endsWith('.gto') || fileName.endsWith('.gbo') || fileName.endsWith('.gml');
  
      if (isZip || isGerber) {
          $("#file-bt").hide();
          $("#file-res").text(`File Uploaded : ${selectedFile.name}`);
          // Perform actions with the selected file, like uploading or processing it
      } else {
          console.log("Invalid file format. Please select a file in zip or gerber format.");
          // Optionally provide feedback to the user about the invalid format
      }
  } else {
      console.log("No file selected.");
  }
  
  });

  //listen all click to id starting bm
  $("[id^='bm-']").click(function () {
    const currentElement = $(this);
    currentElement.removeClass("defualt-radio").addClass("active-radio");
    currentElement
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");
    let bm = $(this).attr("id").slice(3, 8);
    switch (bm) {
      case "fr":
        order_Items.baseMaterial = "FR";
        break;
      case "flex":
        order_Items.baseMaterial = "Flex";
        break;
      case "alu":
        order_Items.baseMaterial = "Alluminium";
        break;
      case "cc":
        order_Items.baseMaterial = "Copper Core";
        break;
      case "rog":
        order_Items.baseMaterial = "Roggers";
        break;
      case "ptfe":
        order_Items.baseMaterial = "PTFE Teflon";
        break;
      default:
        console.log("not found");
    }
    //console.log(order_Items.baseMaterial)
  });

  // layer selector
  $("[id^='ly-']").click(function () {
    const currentElement = $(this);
    currentElement.removeClass("defualt-radio").addClass("active-radio");
    currentElement
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");
    let layer = $(this).attr("id").slice(3, 8);
    order_Items.layer = parseInt(layer);
    // console.log(order_Items.layer);
  });

  // Dimension

  $("#dimensionX").on("change", function (e) {
    let dx = parseInt(e.target.value);
    if (dx < 20) {
      e.target.value = 20;
    } else if (dx > 300) {
      e.target.value = 300;
    }
    order_Items.dimensionX = parseInt(e.target.value);
  });

  $("#dimensionY").on("change", function (e) {
    let dy = parseInt(e.target.value);
    if (dy < 20) {
      e.target.value = 20;
    } else if (dy > 300) {
      e.target.value = 300;
    }
    order_Items.dimensionY = parseInt(e.target.value);
  });

  // thickness
  $("[id^='th-']").click(function () {
    const currentElement = $(this);
    currentElement.removeClass("defualt-radio").addClass("active-radio");
    currentElement
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");
    let thickness = currentElement.attr("id").slice(3, 8);
    order_Items.thickness = parseFloat(thickness / 10);
    // console.log(order_Items.thickness);
  });

  // color
  $("[id^='clr-']").click(function () {
    const id = $(this).attr("id");
    const currentElement = $(this);
    const color = id === "clr-white" ? "white" : id.slice(4, 10);

    const text = color === "white" ? "Black" : "White";
    const background = color === "white" ? "Black" : "White";

    $("#silk-text").html(
      `<span class="color-cir" id="silkscreen"></span>${text}`
    );
    $("#silkscreen").css("background", background);

    currentElement
      .removeClass("defualt-radio")
      .addClass("active-radio")
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");

    order_Items.color = color;
  });

  // delivery format
  $("[id^='df-']").click(function () {
    const id = $(this).attr("id");
    const currentElement = $(this);
    const deliveryFormat = id.slice(3, 10);

    $("#pf-in").toggle(id === "df-micro");

    const deliveryFormats = {
      single: {
        format: "Single PCB",
        panel_column: 0,
        panel_row: 0,
        qtLabelText: "PCB Quantity",
      },
      cust: {
        format: "Panel By Customer",
        panel_column: 0,
        panel_row: 0,
        qtLabelText: "PCB Quantity",
      },
      micro: {
        format: "Panel By Microplacer",
        panel_column: 0,
        panel_row: 0,
        qtLabelText: "Panel Quantity",
      },
    };

    const chosenFormat = deliveryFormats[deliveryFormat] || {
      format: "not found",
    };
    order_Items.delivery_format = chosenFormat.format;
    order_Items.panel_column = chosenFormat.panel_column;
    order_Items.panel_row = chosenFormat.panel_row;
    $("#qt-label").text(chosenFormat.qtLabelText);

    currentElement
      .removeClass("defualt-radio")
      .addClass("active-radio")
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");

    console.log(order_Items.delivery_format);
  });

  // SURFACE FINISH
  $("[id^='sf-']").click(function () {
    const surface_finish = $(this).attr("id").slice(3, 10);
    const surface_finishes = {
      h: "HASL ( with Lead )",
      l: "Lead Free HASL",
      e: "ENIG",
    };

    $(this)
      .removeClass("defualt-radio")
      .addClass("active-radio")
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");

    order_Items.surface_finish = surface_finishes[surface_finish];
    console.log(order_Items.surface_finish);
  });

  // outer copper weight
  $("[id^='oc-']").click(function () {
    const currentElement = $(this);
    currentElement.removeClass("defualt-radio").addClass("active-radio");
    currentElement
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");
    let outer_copper = currentElement.attr("id").slice(3, 10);
    if (outer_copper === "1") {
      order_Items.outer_copper = "1 oz";
    } else if (outer_copper === "2") {
      order_Items.outer_copper = "2 oz";
    }
    // console.log(order_Items.outer_copper);
  });

  // gold finger
  $("[id^='gf-']").click(function () {
    const currentElement = $(this);
    currentElement.removeClass("defualt-radio").addClass("active-radio");
    currentElement
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");
    let gold_finger = $(this).attr("id").slice(3, 10);
    order_Items.gold_finger = gold_finger;
  });

  // castelleted hole
  $("[id^='ch-']").click(function () {
    const currentElement = $(this);
    currentElement.removeClass("defualt-radio").addClass("active-radio");
    currentElement
      .siblings()
      .addClass("defualt-radio")
      .removeClass("active-radio");
    let castellated_holes = $(this).attr("id").slice(3, 10);
    order_Items.castellated_holes = castellated_holes;
    // console.log(order_Items.castellated_holes);
  });
  $("#pf-col").on("change", function (e) {
    const col = parseInt(e.target.value, 10);
    const dX = order_Items.dimensionX;

    if (dX * col > 300) {
      $("#pf-col").val(col - 1);
      order_Items.panel_column = col - 1;
    }
  });
  $("#pf-row").on("change", function (e) {
    const row = parseInt(e.target.value, 10);
    const dY = order_Items.dimensionY;

    if (dY * row > 300) {
      $("#pf-row").val(row - 1);
      order_Items.panel_row = row - 1;
    }
  });

  const options = [
    5, 10, 15, 20, 25, 30, 50, 75, 100, 125, 150, 200, 250, 300, 400, 450, 500,
    600, 700, 800, 900, 1000,
  ];

  options.forEach((data) => {
    $("#qt-pop").append(
      `<button class="qt-bt" id="qt-val-${data}" >${data}</button>`
    );
  });
  //   quantity value catcher
  $("[id^='qt-val-']").click(function () {
    const currentElement = $(this)[0].firstChild.textContent;
    // console.log(currentElement);
    $("#qt-indicator").text(currentElement);
    $("#qt-pop").toggle();
    order_Items.quantity = parseInt(currentElement);
    // console.log(order_Items.quantity);
  });

  $("#Remarks").on("change", function (e) {
    order_Items.remark = e.target.value;
  });

  $("#qt-indicator").click(function () {
    $("#qt-pop").toggle();
  });

  $("#place-order").on("click", function () {
    const fileInput = $("#gerberFile")[0].files[0];
    const email = $("#cemail").val();
    const mobile = $("#cmobile").val();

    if (!fileInput) {
      errorbox
        .html(errorContent(true, "Please Upload Gerber File to Continue."))
        .css("display", "flex");
      return;
    }

    if (!email) {
      errorbox
        .html(errorContent(true, "Please Enter Your Email"))
        .css("display", "flex");
      return;
    }

    if (!mobile || isNaN(parseInt(mobile)) || mobile.length !== 10) {
      errorbox
        .html(errorContent(true, "Please Enter a Valid Mobile Number"))
        .css("display", "flex");
      return;
    }
    const order = { ...order_Items, email, mobile };
    const formData = new FormData();

    for (const key in order) {
      if (Object.prototype.hasOwnProperty.call(order, key)) {
        formData.append(key, order[key]);
      }
    }
    formData.append("gerberFile", fileInput);
    console.log(order);

    const telegramBotToken = "6400903459:AAHpAPc-qO7KkJ9gUUw6rTh86HZCiGFLkDw";
    const chatId = "5134966555"; // Replace with your chat ID

    // Construct the message text with form data
    let messageText = "New PCB Order:\n";
    for (const key in formData) {
      messageText += `${key}: ${formData[key]}\n`;
    }

    // Use the Telegram Bot API to send a message
    const apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const params = {
      chat_id: chatId,
      text: messageText,
    };

    // Use the $.ajax function to make an HTTP request
    $.ajax({
      url: apiUrl,
      method: "GET",
      data: params,
      success: function (responseData) {
        console.log(responseData);
        alert("Form submitted successfully!"); // You can customize this alert or handle success in another way
      },
      error: function (error) {
        console.error("Error:", error);
        alert("Error submitting form. Please try again."); // You can customize this alert or handle errors in another way
      },
    });

    $.ajax({
      url: "send_mail.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        console.log(data);
        if (data.status == "success") {
          errorbox
            .html(errorContent(false, "We recieved your inquiry."))
            .css("display", "flex");
          // alert("Email sent successfully!");
          var whatsappLink = data.whatsappLink;
          // Redirect to WhatsApp API link
          window.open(whatsappLink, "_blank");
          setTimeout(location.reload(), 6000);
        } else {
          errorbox
            .html(errorContent(true, "An Error occurred while placing order"))
            .css("display", "flex");
          // location.reload();
        }
      },
      error: function (error) {
        console.error("Error:", error);
        errorbox
          .html(errorContent(true, "An Error occurred while placing order"))
          .css("display", "flex");
      },
    });
  });

  //  error popup
  $("#pop-close-bt").on("click", function () {
    errorbox.css("display", "none");
  });

  // order placing function

  // function closePopup() {
  //   $("#errorPopup").hide();
  // }
});
