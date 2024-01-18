import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_LOCAL } from "src/config/API";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  table: {
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    marginTop: 2,
    marginBottom: 2,
  },
  body: {
    paddingTop: 25,
    paddingBottom: 50,
    paddingHorizontal: 30,
    // fontSize:
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  header: {
    fontSize: 12,
    textAlign: "center",
    // marginBottom: 5
  },
  textHeader: {
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 2,
  },
  labelCell: {
    width: "40%",
    textAlign: "left",
    fontSize: 9,
  },
  valueCell: {
    width: "60%",
    textAlign: "left",
    fontSize: 9,
  },
  text: {
    fontSize: 9,
    marginBottom: 2,
  },
  emptyTableRow: {
    flexDirection: "row",
  },
  emptyCell: {
    width: "50%",
    height: 20,
    border: "1px solid #000",
    display: "flex",
    justifyContent: "center", // Center vertically
    alignItems: "center",
    fontSize: 9,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  user: {
    position: "absolute",
    fontSize: 8,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  qrContainer: {
    alignItems: "center",
  },
  qr: {
    width: 110,
    height: 110,
  },
});

const customeSize = { width: 300, height: 590 };

// Create Document Component

const Eticket = ({ data }) => {
  const [dataEtiket, setDataEtiket] = useState([]);
  const [qrcode, setQrcode] = useState([]);
  const viewEticket = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/view/eticket/${data.id_booking}`,
      });
      setDataEtiket(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const viewQrCode = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${API_LOCAL}/api/users/view/qrcode`,
        params: {
          ID_Booking: data.id_booking,
        },
      });
      setQrcode(() => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewEticket();
    viewQrCode();
  }, [data]);

  return (
    <>
      <Document>
        <Page size={customeSize} style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>
              GATEPASS {dataEtiket.Service_Name}
            </Text>
            <Text style={styles.textHeader}>Terminal JICT - Domestik</Text>
          </View>
          <View style={styles.qrContainer}>
            {qrcode && (
              <View style={styles.qr}>
                <Image src={qrcode} allowDangerousPaths="true" />
              </View>
            )}
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>No Petikemas</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>
                  : {dataEtiket.Container_Number} {dataEtiket.Container_Size}/
                  {dataEtiket.Container_Type}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Slot Time</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>
                  : {dataEtiket.Date} {dataEtiket.Start_Timeslot}-
                  {dataEtiket.End_Timeslot}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Closing Time</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Closing_Time}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>No Request</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.No_Request}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Expired DO</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: -</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>STID - Plat Number</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>
                  : {dataEtiket.STID_Number} - {dataEtiket.Plat_Number}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Driver Name</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Driver_Name}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Vessel Name</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Vessel_Name}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>JPT/FORWARDER</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Company_Name}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>POD</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.POD}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>FPOD</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.FPOD}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>O/I</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>
                  :{" "}
                  {dataEtiket.IO_Type === "Ocean Going"
                    ? "International"
                    : "Domestik"}
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Comodity</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Commodity_Name}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Weight</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Weight}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>OD</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.OD}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Sling</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: {dataEtiket.Sling}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Seal Number</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>: -</Text>
              </View>
            </View>
          </View>

          <Text style={styles.text}>Remarks</Text>
          <View style={styles.table}>
            <View style={styles.emptyTableRow}>
              <View style={styles.emptyCell}>
                <Text>Paraf</Text>
              </View>
              <View style={styles.emptyCell}>
                <Text>Remarks</Text>
              </View>
            </View>
            <View style={styles.emptyTableRow}>
              <View style={styles.emptyCell}></View>
              <View style={styles.emptyCell}></View>
            </View>
          </View>

          <Text
            style={styles.pageNumber}
            render={({ pageNumber }) => pageNumber}
            fixed
          />
        </Page>
      </Document>
    </>
  );
};

export default Eticket;
