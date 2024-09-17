import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useUnit } from "effector-react";
import { $valumesChart } from "../../store/chartsStore";

am4core.useTheme(am4themes_animated);

const VolumesChart = () => {
  const chartRef: any = useRef(null);

  const dataChart = useUnit($valumesChart);
  const data = dataChart[0].valumes;

  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create(chartRef.current, am4charts.XYChart);

    // Add data
    chart.data = data;

    // Create X axis
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey("day", "dd.MM");
    dateAxis.periodChangeDateFormats.setKey("day", "dd.MM");
    dateAxis.baseInterval = { timeUnit: "day", count: 1 };
    dateAxis.renderer.labels.template.fontFamily = "Amiko, sans-serif";
    dateAxis.renderer.labels.template.fontSize = 14;
    // dateAxis.renderer.labels.template.fontWeight = 400;
    dateAxis.renderer.labels.template.fill = am4core.color("#abafc4");
    dateAxis.renderer.grid.template.strokeOpacity = 0; // Убираем линии сетки

    // Create Y axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.columns.template.fill = am4core.color("#6B77BE"); // Цвет колонок
    series.columns.template.stroke = am4core.color("#6B77BE");
    series.columns.template.width = am4core.percent(50);

    // Add tooltip
    series.columns.template.tooltipText =
      "{dateX.formatDate('dd.MM')}: {valueY}"; // Формат текста подсказки

    // Add average line
    let average = chart.series.push(new am4charts.LineSeries());
    average.dataFields.valueY = "average";
    average.dataFields.dateX = "date";
    average.stroke = am4core.color("#46C5E5"); // Цвет линии
    average.strokeWidth = 2;
    average.strokeDasharray = "4,4"; // Пунктирная линия
    // average.tooltip.disabled = true; // Отключаем тултип для линии

    // Calculate average
    let total = 0;
    chart.data.forEach((item) => (total += item.value));
    let avg = total / chart.data.length;

    // Add the average line data
    chart.data = chart.data.map((item) => ({ ...item, average: avg }));

    // Add cursor
    // Remowe mb
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

export default VolumesChart;
