import React from "react";
import Logo from "../assets/images/logo/logo3.png";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
    Image,
    PDFViewer,
} from "@react-pdf/renderer";
import TimesFont from "../assets/font/Poppins-Regular.ttf";
import PlayFont from "../assets/font/playfair.ttf";

Font.register({
    family: "Times New Roman",
    src: TimesFont,
});

Font.register({
    family: "Great Vibes",
    src: PlayFont,
});
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 9,
        fontFamily: "Times New Roman",
    },
    title: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
    },
    section: {
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 10,
        marginBottom: 5,
        fontWeight: "bold",
    },
    paragraph: {
        marginBottom: 5,
        textAlign: "justify",
    },
    listItem: {
        marginLeft: 15,
        marginBottom: 3,
        textAlign: "justify",
    },
    signatureSection: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    signature: {
        width: 80,
        height: 40,
    },
    smallText: {
        fontSize: 9,
    },
});

// Create Document Component
const ServiceAgreement = ({ signature, date, companyName, personName }) => (
    <PDFViewer width={"100%"} height={1200}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 5,
                        alignItems: "flex-start",
                        flexDirection: "row",
                            width:"100%"
                    }}
                >
                    <Image
                        src={Logo}
                        style={{ width: 80, height: 30, paddingBottom: 4 }}
                    />
                </View>
                <Text style={styles.title}>Service Agreement</Text>

                <Text style={styles.paragraph}>
                    This Agreement outlines the terms and conditions under which Moving7
                    will provide services to "{companyName}" (the "Client") for obtaining
                    quote requests for various types of moves, including international,
                    domestic, and industrial relocations.
                </Text>

                {/* Scope of Services */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>1. Scope of Services</Text>
                    <Text style={styles.listItem}>
                        1.1 Moving7 will provide the Client with quote requests for:
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • International moves
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        {" "}
                        • Domestic moves
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        {" "}
                        • Industrial moves
                    </Text>
                    <Text style={styles.listItem}>
                        1.2 Moving7 will forward each quote request to a maximum of five (5)
                        moving companies.
                    </Text>
    {
        /*
                    <Text style={styles.listItem}>
                        1.3 The Client may cancel or place this contract on hold at any
                        time. Cancellations or holds will be processed within one (1)
                        business day. A hold may not exceed thirty (30) days without
                        impacting the Client's ranking.
                    </Text>
        */
    }
                    <Text style={styles.listItem}>
                        1.4 The Client agrees to follow up on all leads provided by Moving7
                        in a timely and appropriate manner.
                    </Text>
                    <Text style={styles.listItem}>
                        1.5 The Client is strictly prohibited from reselling any leads
                        provided by Moving7.
                    </Text>

                    {/* Add remaining points in the same way */}
                </View>

                {/* Claim Policy */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>2. Claim Policy</Text>
                    <Text style={styles.listItem}>
                        2.1 The Client may return a lead to Moving7 within three (3) days
                        if:
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • The lead contains incorrect contact information, including
                        telephone number and email address.
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • The lead is a duplicate.
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • The lead is clearly fake (e.g., Name: "Test," Address: "Test").
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • The lead is for a domestic move when an international move was
                        requested.
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • The move date is scheduled for more than one (1) year in the
                        future.
                    </Text>
                    {/* Add remaining points in the same way */}
                </View>

                {/* Online Account */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>3. Online Account</Text>
                    <Text style={styles.listItem}>
                        3.1 The Client account on Moving 7 requires acceptance of this
                        agreement for activation. This account will provide access to:
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Leads, including detailed information
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Invoices and specifications
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Accepted claims and refunds
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Basic account information
                    </Text>

                    {/* Add remaining points in the same way */}
                </View>

                {/* Pricing */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>4. Pricing</Text>
                    <Text style={styles.listItem}>
                        4.1 The Client agrees to the following pricing structure:
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Domestic moves: $7 USD per lead
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • International moves: $15 USD per lead
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Industrial moves: $25 USD per lead
                    </Text>
                </View>

                {/* Payment Method */}
                <View style={styles.section}>
                    <Text style={styles.subTitle}>5. Payment Method</Text>
                    <Text style={styles.listItem}>
                        5.1 The Client may choose from the following payment methods:
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Top-up E-Wallet
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Bank Transfer
                    </Text>
                    <Text style={[styles.listItem, { marginLeft: 30 }]}>
                        • Credit Card
                    </Text>
                    <Text style={styles.listItem}>
                        5.2 The Client authorizes Moving7 to charge their credit card for
                        any outstanding invoices. The Client is responsible for ensuring
                        sufficient funds are available.
                    </Text>
                    <Text style={styles.listItem}>
                        5.3 A minimum top-up amount of $100 is required.
                    </Text>
                    <Text style={styles.listItem}>
                        5.4 In the event a transaction is denied due to insufficient funds,
                        a $15 penalty will be applied to the Client's account.
                    </Text>
                    {/* Add remaining points in the same way */}
                </View>

                <View style={styles.section}>
                    <Text style={styles.subTitle}>6. Agreement</Text>
                    <Text style={styles.paragraph}>
                        By signing below, the undersigned confirms their agreement to the
                        terms and conditions outlined in this Agreement and Moving7's
                        general terms and conditions, which are available at
                        http://moving7.com/terms-and-conditions.html.
                    </Text>
                    <Text style={styles.paragraph}>
                        Upon receipt of this signed Agreement, Moving7 will confirm the
                        activation of the Client's account via email.
                    </Text>
                </View>

                {/* Signature Section */}
                <View style={styles.signatureSection}>
                    <View>
                        <Text style={styles.smallText}>Company Name: {companyName}</Text>
                        <Text style={styles.smallText}>
                            Authorized Person Name:
                            <Text style={{ fontSize: 20, fontFamily: "Great Vibes" }}>
                                {" "}
                                {personName}
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={styles.signature}
                            source={signature} // Add the path to the signature image
                        />
                        <Text style={styles.smallText}>Signature</Text>
                        <Text style={styles.smallText}>Date: {date}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default ServiceAgreement;
