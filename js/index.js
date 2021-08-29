Vue.component("model", {
  props: ["title"],
  template: `<!-- The Modal -->
          <div class="bg-dark modal" id="myModal" style="display: block;">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">{{title}}</h4>
                  <button type="button" class="close" @click="$emit('close')" data-dismiss="modal">×</button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                  <slot></slot>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" @click="$emit('close')" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
            `,
});

var app = new Vue({
  el: "#app",
  data: {
    showModelPayNow: false,
    showModelCustom: false,
    showModelAdditional: false,
    showModelNETS: false,
    showModelMessage: false,
    showModelAdditional64: false,
    showModelNETSQR: false,
    qrString: "aloha v2",
    qrStringToParse: "",
    merchname: "",
    emvcoMainNodes: [
      {
        id: "00",
        desc: "Version",
        value: "01",
        editable: true,
        maxlen: 2,
      },
      {
        id: "01",
        desc: "Static / Dynamic",
        value: "11",
        editable: true,
        maxlen: 2,
      },
      {
        id: "02",
        desc: "Visa Merchant Info",
        value: "",
        editable: true,
      },
      {
        id: "04",
        desc: "Mastercard Merchant Info",
        value: "",
        editable: true,
        maxlen: 99,
      },
      {
        id: "52",
        desc: "MCC",
        value: "",
        editable: true,
        maxlen: 4,
      },
      {
        id: "53",
        desc: "Currency Numeric Code",
        value: "702",
        editable: true,
        maxlen: 3,
      },
      {
        id: "54",
        desc: "Amount",
        value: "10.00",
        editable: true,
        maxlen: 13,
      },
      {
        id: "58",
        desc: "Country Code",
        value: "SG",
        editable: true,
        maxlen: 2,
      },
      {
        id: "59",
        desc: "Merchant Name",
        value: "QR Generator V2",
        editable: true,
        maxlen: 25,
      },
      {
        id: "60",
        desc: "Merchant City",
        value: "SINGAPORE",
        editable: true,
        maxlen: 15,
      },
      {
        id: "61",
        desc: "Postal Code",
        value: "081006",
        editable: true,
        maxlen: 10,
      },
    ],
    tag62Nodes: [
      {
        id: "01",
        desc: "Bill Number (Reference)",
        value: "TESTmessage01",
        editable: true,
        maxlen: 25,
      },
      {
        id: "02",
        desc: "Mobile Number",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "03",
        desc: "Store Label",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "04",
        desc: "Loyalty Number",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "05",
        desc: "Reference Label",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "06",
        desc: "Customer Label",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "07",
        desc: "Terminal Label",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "08",
        desc: "Purpose of Transaction",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "09",
        desc: "Additional Consumer Data Request (A/M/E)",
        value: "",
        editable: true,
        maxlen: 3,
      },
      {
        id: "10",
        desc: "Merchant Tax ID",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "11",
        desc: "Merchant Channel",
        value: "",
        editable: true,
        maxlen: 3,
      },
    ],
    tag64Nodes: [
      {
        id: "00",
        desc: "Language Preference",
        value: "",
        editable: true,
        maxlen: 2,
      },
      {
        id: "01",
        desc: "Merchant Name (Alternate Language)",
        value: "",
        editable: true,
        maxlen: 25,
      },
      {
        id: "02",
        desc: "Merchant City (Alternate Language)",
        value: "",
        editable: true,
        maxlen: 15,
      },
    ],
    MessageNodes: [
      {
        id: "01",
        desc: "Reference / Message",
        value: "TESTmessage01",
        editable: true,
        maxlen: 25,
      },
    ],
    paynowNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.PAYNOW",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "Proxy Type (0=MSISDN,2=UEN,3=VPA)",
        value: "0",
        editable: true,
        maxlen: 1,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "+6582014380",
        editable: true,
        maxlen: 21,
      },
      {
        id: "03",
        desc: "Amount Editable (0=not editable,1=editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
      {
        id: "04",
        desc: "Expiry Date (yyyyMMdd or yyyyMMddHHmmss)",
        value: "",
        editable: true,
        maxlen: 14,
      },
      {
        id: "05",
        desc: "Merchant Ref No",
        value: "",
        editable: true,
        maxlen: 25,
      },
    ],
    NETSNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.COM.NETS",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "NETS QR Metadata",
        value: "10123456789321231235959",
        editable: true,
        maxlen: 25,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "11136001300",
        editable: true,
        maxlen: 25,
      },
      {
        id: "03",
        desc: "Terminal ID",
        value: "36001301",
        editable: true,
        maxlen: 25,
      },
      {
        id: "09",
        desc: "Amount Editable (0=Not Editable, 1=Editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
      {
        id: "99",
        desc: "NETS Signature",
        value: "24E9AD55",
        editable: true,
        maxlen: 25,
      },
    ],
    NETSQRNodes: [
      {
        desc: "Global Identifier",
        value: "SG.COM.NETS",
        editable: false,
        maxlen: 25,
      },
      {
        desc: "NETS QR Metadata",
        value: "10123456789321231235959",
        editable: true,
        maxlen: 25,
      },
      {
        desc: "Proxy Value",
        value: "11136001300",
        editable: true,
        maxlen: 25,
      },
      {
        desc: "Terminal ID",
        value: "36001301",
        editable: true,
        maxlen: 25,
      },
      {
        desc: "Amount Editable (0=Not Editable, 1=Editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
      {
        desc: "NETS Signature",
        value: "24E9AD55",
        editable: true,
        maxlen: 25,
      },
    ],
    customNodeNumber: [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
    ],
    customNode: {
      id: "26",
      desc: "Merchant Account Info",
      value: "",
      editable: true,
      maxlen: 99,
    },
    quickpaynowmobileNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.PAYNOW",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "Proxy Type (0=MSISDN,2=UEN,3=VPA)",
        value: "0",
        editable: true,
        maxlen: 1,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "+6582014380",
        editable: true,
        maxlen: 21,
      },
      {
        id: "03",
        desc: "Amount Editable (0=not editable,1=editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
    ],
    quickpaynowuenNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.PAYNOW",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "Proxy Type (0=MSISDN,2=UEN,3=VPA)",
        value: "2",
        editable: true,
        maxlen: 1,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "0200062202OC1",
        editable: true,
        maxlen: 21,
      },
      {
        id: "03",
        desc: "Amount Editable (0=not editable,1=editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
    ],
    quickpaynowvpaMOBILENodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.PAYNOW",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "Proxy Type (0=MSISDN,2=UEN,3=VPA)",
        value: "3",
        editable: true,
        maxlen: 1,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "+6599999999#GRAB",
        editable: true,
        maxlen: 21,
      },
      {
        id: "03",
        desc: "Amount Editable (0=not editable,1=editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
    ],
    quickpaynowvpaUENNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.PAYNOW",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "Proxy Type (0=MSISDN,2=UEN,3=VPA)",
        value: "3",
        editable: true,
        maxlen: 1,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "UENAAAAAAAAA#GRAB",
        editable: true,
        maxlen: 21,
      },
      {
        id: "03",
        desc: "Amount Editable (0=not editable,1=editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
    ],
    quickNETSNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.COM.NETS",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "NETS QR Metadata",
        value: "10123456789321231235959",
        editable: true,
        maxlen: 25,
      },
      {
        id: "02",
        desc: "Proxy Value",
        value: "11136001300",
        editable: true,
        maxlen: 25,
      },
      {
        id: "03",
        desc: "Terminal ID",
        value: "36001301",
        editable: true,
        maxlen: 25,
      },
      {
        id: "09",
        desc: "Amount Editable (0=Not Editable, 1=Editable)",
        value: "1",
        editable: true,
        maxlen: 1,
      },
      {
        id: "99",
        desc: "NETS Signature",
        value: "24E9AD55",
        editable: true,
        maxlen: 25,
      },
    ],
    SGQRNodes: [
      {
        id: "00",
        desc: "Global Identifier",
        value: "SG.SGQR",
        editable: false,
        maxlen: 25,
      },
      {
        id: "01",
        desc: "SGQR ID",
        value: "180307510317",
        editable: true,
        maxlen: 25,
      },
      {
        id: "02",
        desc: "QR Version",
        value: "01.0003",
        editable: true,
        maxlen: 25,
      },
      {
        id: "07",
        desc: "New Version Date",
        value: "20180407",
        editable: true,
        maxlen: 25,
      },
    ],
    VISANodes: [
      {
        id: "02",
        desc: "Visa Merchant Info",
        value: "4036180000000020",
        editable: true,
        maxlen: 25,
      },
    ],
    MASTERNodes: [
      {
        id: "04",
        desc: "Mastercard Merchant Info",
        value: "222720000000002",
        editable: true,
        maxlen: 25,
      },
    ],
    emvcoParsedNodes: [],
  },
  methods: {
    parseQR() {
      this.emvcoParsedNodes = [];
      var qr = this.qrStringToParse;
      var pos = 0;
      var key = "";
      var keylen = 0;
      var data = "";
      if (qr.length > 20) {
        while (pos < qr.length) {
          key = qr.substr(pos, 2);
          pos += 2;
          keylen = qr.substr(pos, 2);
          pos += 2;
          if (!isNaN(keylen)) {
            data = qr.substr(pos, keylen);
            pos += parseInt(keylen, 10);
          }
          if (parseInt(key, 10) >= 2 && parseInt(key, 10) <= 51) {
            var idx = this.emvcoParsedNodes.length;
            var node = { id: key, value: data };
            console.log(data);
            Vue.set(this.emvcoParsedNodes, idx, node);
          }
        }
      }
    },
    addToMainNode(node) {
      this.updateEMVCoMainNodes({
        id: node.id,
        value: node.value,
        desc: "Mixed PayLoad",
      });
    },
    onDecode(decodedString) {
      this.qrString = decodedString;
    },
    onDecodeToParse(decodedString) {
      this.qrStringToParse = decodedString;
      this.parseQR();
    },
    zeroPadding(val) {
      if (val.length < 10) {
        return "0" + val.length;
      } else return "" + val.length;
    },
    updateEMVCoMainNodes(nodeInfo) {
      var idx = this.emvcoMainNodes.findIndex((node) => node.id == nodeInfo.id);
      if (idx == -1) {
        //var data = this.combineNodes([ { id: this.customNode.id, value: this.customNode.value } ]);
        var data = {};
        Object.assign(data, nodeInfo);
        this.emvcoMainNodes.push(data);
      } else {
        var data = {};
        Object.assign(data, nodeInfo);
        Vue.set(this.emvcoMainNodes, idx, data);
      }
    },
    addCustomNode() {
      this.updateEMVCoMainNodes({
        id: this.customNode.id,
        value: this.customNode.value,
        desc: "Additional PayLoads",
        editable: true,
      });
    },
    addPayNowNode() {
      var paynowPayLoad = this.combineNodes(this.paynowNodes);
      if (this.paynowNodes[2].value.length > 0) {
        //qr = qr.concat('26').concat(this.zeroPadding(paynowPayLoad)).concat(paynowPayLoad);
        this.updateEMVCoMainNodes({
          id: "26",
          desc: "PayNow PayLoad",
          value: paynowPayLoad,
          editable: true,
        });
      } else {
        this.updateEMVCoMainNodes({
          id: "26",
          desc: "PayNow PayLoad",
          value: "",
          editable: true,
        });
      }
    },
    addNETSNode() {
      if (this.NETSNodes[4].value.length > 0) {
        var NETSPayLoad = this.combineNodes(this.NETSNodes);
        //qr = qr.concat('26').concat(this.zeroPadding(NETSPayLoad)).concat(NETSPayLoad);
        this.updateEMVCoMainNodes({
          id: "27",
          desc: "NETS PayLoad",
          value: NETSPayLoad,
          editable: true,
        });
        this.updateEMVCoMainNodes({
          id: "52",
          desc: "MCC",
          value: "5814",
          editable: true,
        });
      } else {
        this.updateEMVCoMainNodes({
          id: "27",
          desc: "NETS PayLoad",
          value: "",
          editable: true,
        });
        this.updateEMVCoMainNodes({
          id: "52",
          desc: "MCC",
          value: "",
          editable: true,
        });
      }
    },
    addNETSQRNode() {
      if (this.NETSNodes[4].value.length > 0) {
        var NETSPayLoad = this.combineNodes(this.NETSNodes);
        //qr = qr.concat('26').concat(this.zeroPadding(NETSPayLoad)).concat(NETSPayLoad);
        this.updateEMVCoMainNodes({
          id: "27",
          desc: "NETS PayLoad",
          value: NETSPayLoad,
          editable: true,
        });
        this.updateEMVCoMainNodes({
          id: "52",
          desc: "MCC",
          value: "5814",
          editable: true,
        });
      } else {
        this.updateEMVCoMainNodes({
          id: "27",
          desc: "NETS PayLoad",
          value: "",
          editable: true,
        });
        this.updateEMVCoMainNodes({
          id: "52",
          desc: "MCC",
          value: "",
          editable: true,
        });
      }
    },
    addOptionalNode() {
      var tag62PayLoad = this.combineNodes(this.tag62Nodes);
      if (tag62PayLoad.length > 0) {
        this.updateEMVCoMainNodes({
          id: "62",
          desc: "Tag62 PayLoad",
          value: tag62PayLoad,
          editable: true,
        });
      } else {
        this.updateEMVCoMainNodes({
          id: "62",
          desc: "Tag62 PayLoad",
          value: "",
          editable: true,
        });
      }
    },
    addOptional64Node() {
      var tag64PayLoad = this.combineNodes(this.tag64Nodes);
      if (tag64PayLoad.length > 0) {
        this.updateEMVCoMainNodes({
          id: "64",
          desc: "Tag64 PayLoad",
          value: tag64PayLoad,
          editable: true,
        });
      } else {
        this.updateEMVCoMainNodes({
          id: "64",
          desc: "Tag64 PayLoad",
          value: "",
          editable: true,
        });
      }
    },
    addMessageNode() {
      var MessagePayLoad = this.combineNodes(this.MessageNodes);
      if (MessagePayLoad.length > 0) {
        this.updateEMVCoMainNodes({
          id: "62",
          desc: "Reference / Message",
          value: MessagePayLoad,
          editable: true,
        });
      } else {
        this.updateEMVCoMainNodes({
          id: "62",
          desc: "Reference / Message",
          value: "",
          editable: true,
        });
      }
    },
    addquickPAYNOWmobile() {
      var quickpaynowmobilePayLoad = this.combineNodes(
        this.quickpaynowmobileNodes
      );
      this.updateEMVCoMainNodes({
        id: "26",
        desc: "PayNow Mobile PayLoad",
        value: quickpaynowmobilePayLoad,
        editable: true,
      });
      merchname = "QR PAYNOW MOBILE";
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: merchname,
        editable: true,
      });
    },
    addquickPAYNOWuen() {
      var quickpaynowuenPayLoad = this.combineNodes(this.quickpaynowuenNodes);
      this.updateEMVCoMainNodes({
        id: "27",
        desc: "PayNow UEN PayLoad",
        value: quickpaynowuenPayLoad,
        editable: true,
      });
      merchname = "QR PAYNOW UEN";
      this.updateEMVCoMainNodes({
        id: "52",
        desc: "MCC",
        value: "5814",
        editable: true,
      });
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: merchname,
        editable: true,
      });
    },
    addquickPAYNOWvpaMOBILE() {
      var quickpaynowvpaMOBILEPayLoad = this.combineNodes(
        this.quickpaynowvpaMOBILENodes
      );
      this.updateEMVCoMainNodes({
        id: "28",
        desc: "PayNow VPA Mobile PayLoad",
        value: quickpaynowvpaMOBILEPayLoad,
        editable: true,
      });
      merchname = "QR PAYNOW VPA MOBILE";
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: merchname,
        editable: true,
      });
    },
    addquickPAYNOWvpaUEN() {
      var quickpaynowvpaUENPayLoad = this.combineNodes(
        this.quickpaynowvpaUENNodes
      );
      this.updateEMVCoMainNodes({
        id: "29",
        desc: "PayNow VPA UEN PayLoad",
        value: quickpaynowvpaUENPayLoad,
        editable: true,
      });
      merchname = "QR PAYNOW VPA UEN";
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: merchname,
        editable: true,
      });
      this.updateEMVCoMainNodes({
        id: "52",
        desc: "MCC",
        value: "",
        editable: true,
      });
    },
    addNETSquick() {
      if (this.quickNETSNodes[1].value.length > 0) {
        var NETSquickPayLoad = this.combineNodes(this.quickNETSNodes);
        //qr = qr.concat('26').concat(this.zeroPadding(NETSquickPayLoad)).concat(NETSquickPayLoad, editable: true);
        this.updateEMVCoMainNodes({
          id: "30",
          desc: "NETS PayLoad",
          value: NETSquickPayLoad,
          editable: true,
        });
        merchname = "QR NETS";
        this.updateEMVCoMainNodes({
          id: "59",
          desc: "Merchant Name",
          value: merchname,
          editable: true,
        });
        this.updateEMVCoMainNodes({
          id: "52",
          desc: "MCC",
          value: "5814",
          editable: true,
        });
      }
    },
    addSGQRPLquick() {
      var SGQRPayLoad = this.combineNodes(this.SGQRNodes);
      this.updateEMVCoMainNodes({
        id: "51",
        desc: "SGQR PayLoad",
        value: SGQRPayLoad,
        editable: true,
      });
      this.merchName(merchname);
    },
    addVISA() {
      var VISAPayLoad = this.combineNodes(this.VISANodes);
      this.updateEMVCoMainNodes({
        id: "02",
        desc: "Visa Merchant Info",
        value: VISAPayLoad,
        editable: true,
      });
      var SGQRPayLoad = this.combineNodes(this.SGQRNodes);
      this.updateEMVCoMainNodes({
        id: "51",
        desc: "SGQR PayLoad",
        value: SGQRPayLoad,
        editable: true,
      });
      this.updateEMVCoMainNodes({
        id: "52",
        desc: "MCC",
        value: "5814",
        editable: true,
      });
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: "SGQR VISA",
        editable: true,
      });
    },
    addMASTER() {
      var MASTERPayLoad = this.combineNodes(this.MASTERNodes);
      this.updateEMVCoMainNodes({
        id: "04",
        desc: "Mastercard Merchant Info",
        value: MASTERPayLoad,
        editable: true,
      });
      var SGQRPayLoad = this.combineNodes(this.SGQRNodes);
      this.updateEMVCoMainNodes({
        id: "51",
        desc: "SGQR PayLoad",
        value: SGQRPayLoad,
        editable: true,
      });
      this.updateEMVCoMainNodes({
        id: "52",
        desc: "MCC",
        value: "5814",
        editable: true,
      });
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: "SGQR MASTER",
        editable: true,
      });
    },
    merchName(input) {
      var SGQRname = "SG";
      var output = SGQRname + input;
      this.updateEMVCoMainNodes({
        id: "59",
        desc: "Merchant Name",
        value: output,
        editable: true,
      });
    },
    combineNodes(nodes) {
      var result = "";
      for (node of nodes) {
        if (node.value.length > 0) {
          result = result.concat(node.id).concat(this.zeroPadding(node.value));
          result = result.concat(node.value);
        }
      }
      return result;
    },
    generateQR() {
      this.updateEMVCoMainNodes({ id: "63", desc: "CRC Checksum", value: "" });
      var qr = this.combineNodes(
        this.emvcoMainNodes.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          } else {
            return -1;
          }
        })
      );
      qr = qr.concat("6304");
      computedCRC = Hex16(Crc16Str(qr));
      qr = qr.concat(computedCRC);
      this.updateEMVCoMainNodes({
        id: "63",
        desc: "CRC Checksum",
        value: computedCRC,
      });
      this.qrString = qr;
    },
  },
});
