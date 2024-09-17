import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useUnit } from "effector-react";
import { $emaChart } from "../../store/chartsStore";

am4core.useTheme(am4themes_animated);

const EmaChart = () => {
  const chartRef: any = useRef(null);

  const dataChatr = useUnit($emaChart);
  const data = dataChatr[0].ema;
  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create(chartRef.current, am4charts.XYChart);

    // Add data

    chart.data = data;
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Format the date as day.month
    dateAxis.dateFormats.setKey("day", "dd.MM");
    dateAxis.periodChangeDateFormats.setKey("day", "dd.MM");
    dateAxis.baseInterval = { timeUnit: "day", count: 1 }; // Ensure that each day is shown
    dateAxis.renderer.grid.template.strokeOpacity = 0; // Убираем линии сетки
    // Apply styles to X axis labels
    dateAxis.renderer.labels.template.fontFamily = "Amiko, sans-serif";
    dateAxis.renderer.labels.template.fontSize = 14;
    // dateAxis.renderer.labels.template.fontWeight = 400;
    dateAxis.renderer.labels.template.fill = am4core.color("#abafc4");

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // Hide the Y axis and its labels
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    const createSeries = (field: any, name: any, color: any) => {
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.name = name;
      series.strokeWidth = 2;
      series.stroke = am4core.color(color);
    };

    createSeries("EMA50", "Series 1", "#46C5E5"); // Голубой
    createSeries("EMA200", "Series 2", "#6B77BE"); // Фиолетовый

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    chart.cursor.lineX.strokeDasharray = "3,3";

    chart.paddingTop = 0;
    chart.paddingBottom = 0;
    chart.paddingRight = 0;
    chart.paddingLeft = 0;
    chart.marginTop = 0;
    chart.marginLeft = 0;
    chart.marginRight = 0;
    chart.marginBottom = 0;

    // Cleanup
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "196px" }}></div>;
};

export default EmaChart;
