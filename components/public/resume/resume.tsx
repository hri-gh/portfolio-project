"use client"

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',

    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        backgroundColor: "yellow",
    },
    header: {
        fontSize: 28,
        backgroundColor: "red",
        padding: "5",
        borderRadius: "10px",


    }
});

export const Resume = () => {
    const resume = (
        <Document>
            <Page size="A4" style={styles.page}>

                <View style={styles.section}>

                    <Text style={styles.header}>Name: John Doe</Text>
                    <Text>Profession: Software Engineer</Text>
                    <Text>Contact: john@example.com</Text>

                    {/* View inside View */}
                    <View style={styles.section}>
                        <Text>Experience:</Text>
                        <Text>Company: ABC Inc. | Position: Software Developer | Duration: 2018 - Present</Text>
                        <Text>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text>Experience:</Text>
                    <Text>Company: ABC Inc. | Position: Software Developer | Duration: 2018 - Present</Text>
                    <Text>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
                {/* Add more sections as needed */}
            </Page>
        </Document>
    )

    return (
        <>
            <PDFViewer style={{ backgroundColor: 'blue', width: '100%', height: '100vh', borderRadius: "10px", }}>
                {resume}
            </PDFViewer>
            <PDFDownloadLink document={resume} fileName="resume.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
            </PDFDownloadLink>
        </>
    );
};

