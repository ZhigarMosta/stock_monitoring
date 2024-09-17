import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { $buyChart } from "../../store/chartsStore";
import { useUnit } from "effector-react";

am4core.useTheme(am4themes_animated);

const BuyChart = () => {
  const dataChart = useUnit($buyChart);
  const data = dataChart[0].asks;

  const chartHeight = data.length * 41; // Высота в зависимости от количества элементов

  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.data = data;

    // Создание оси Y для цен
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.renderer.grid.template.location = 0;
    yAxis.renderer.inversed = true;
    yAxis.renderer.opposite = false;
    yAxis.dataFields.category = "prise";
    yAxis.renderer.grid.template.strokeOpacity = 0; // Убираем линии сетки
    yAxis.renderer.labels.template.fill = am4core.color("#ABAFC4");
    yAxis.renderer.labels.template.fontFamily = "Amiko, sans-serif";
    yAxis.renderer.labels.template.fontWeight = "400";
    yAxis.renderer.labels.template.fontSize = "12px";
    yAxis.renderer.labels.template.horizontalCenter = "right";

    // Создание оси X для значений
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.labels.template.fill = am4core.color("#ABAFC4");
    // Убираем сетку
    xAxis.renderer.grid.template.strokeOpacity = 0;
    xAxis.renderer.labels.template.disabled = true;
    // Устанавливаем фиксированный диапазон для оси X
    xAxis.min = -100; // Минимальное значение
    xAxis.max = 0; // Максимальное значение

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "value";
    series.dataFields.categoryY = "prise";
    series.name = "Значение";
    series.columns.template.fill = am4core.color("#46C5E5");
    series.columns.template.tooltipText = "[bold]Доля: {value}[bold][/]";
    series.columns.template.adapter.add("tooltipText", (text, target: any) => {
      const originalValue: any = target.dataItem.dataContext.value;
      const invertedValue =
        originalValue > 0 ? -originalValue : Math.abs(originalValue);
      //return `[bold]${target.dataItem.dataContext.prise}[/]: [bold]${invertedValue}[/]`;
      return `[bold]Доля: [bold]${invertedValue}%[/]`;
    });
    // Настройка высоты столбцов
    series.columns.template.height = 10; // Фиксированная высота столбцов
    series.columns.template.width = 20; // Измените ширину столбцов

    chart.paddingRight = 0; // Убираем отступы слева
    chart.marginRight = 0; // Убираем поля слева
    chart.paddingLeft = 0; // Убираем отступы слева
    chart.marginLeft = 0; // Убираем поля слева

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{ width: "100%", height: `${chartHeight}px` }}
    ></div>
  );
};

export default BuyChart;
