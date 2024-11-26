import paths, { rootPaths } from './paths';

export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Analytics',
          to: 'https://www.chusj-sip-ia.ca/',
          active: true
        },
        {
          name: 'Management',
          to: paths.projectManagement,
          active: true
        }
      ]
    }
  ]
};
export const appRoutes = {
  label: 'Patient #2',
  children: [
    {
      name: 'Optistate',
      icon: '',
      to: paths.optistate,
      active: true
    },
    {
      name: 'Optiheart',
      icon: '',
      to: paths.optiheart,
      active: true
    },
    {
      name: 'Optibrain',
      icon: '',
      to: paths.optibrain,
      active: true
    },
    {
      name: 'Optilungs',
      icon: '',
      to: paths.optilungs,
      active: true
    }
  ]
};

export const modulesRoutes = {
  label: 'Modules',
  children: [
    {
      name: 'Forms',
      active: true,
      icon: 'file-alt',
      children: [
        {
          name: 'Basic',
          active: true,
          children: [
            {
              name: 'Form control',
              to: paths.formControl,
              active: true
            },
            {
              name: 'Input group',
              to: paths.inputGroup,
              active: true
            },
            {
              name: 'Select',
              to: paths.select,
              active: true
            },
            {
              name: 'Checks',
              to: paths.checks,
              active: true
            },
            {
              name: 'Range',
              to: paths.range,
              active: true
            },
            {
              name: 'Layout',
              to: paths.formLayout,
              active: true
            }
          ]
        },
        {
          name: 'Advance',
          active: true,
          children: [
            {
              name: 'Advance select',
              to: paths.advanceSelect,
              active: true
            },
            {
              name: 'Date picker',
              to: paths.datePicker,
              active: true
            },
            {
              name: 'Editor',
              to: paths.editor,
              active: true
            },
            {
              name: 'Emoji button',
              to: paths.emojiButton,
              active: true
            },
            {
              name: 'File uploader',
              to: paths.fileUploader,
              active: true
            },
            {
              name: 'Input mask',
              to: paths.inputMask,
              active: true
            },
            {
              name: 'Range slider',
              to: paths.rangeSlider,
              active: true
            },
            {
              name: 'Rating',
              to: paths.rating,
              active: true
            }
          ]
        },
        {
          name: 'Floating labels',
          to: paths.floatingLabels,
          active: true
        },
        {
          name: 'Wizard',
          to: paths.wizard,
          active: true
        },
        {
          name: 'Validation',
          to: paths.validation,
          active: true
        }
      ]
    },
    {
      name: 'Tables',
      icon: 'table',
      active: true,
      children: [
        {
          name: 'Basic tables',
          to: paths.basicTables,
          active: true
        },
        {
          name: 'Advance tables',
          to: paths.advanceTables,
          active: true
        }
      ]
    },
    {
      name: 'Charts',
      icon: 'chart-line',
      active: true,
      children: [
        {
          name: 'Chartjs',
          to: paths.chartjs,
          active: true
        },
        {
          name: 'D3js',
          to: paths.d3js,
          active: true,
          badge: {
            type: 'success',
            text: 'New'
          }
        },
        {
          name: 'ECharts',
          active: true,
          children: [
            {
              name: 'How to use',
              to: paths.echartsHowToUse,
              active: true
            },
            {
              name: 'Line charts',
              to: paths.lineCharts,
              active: true
            },
            {
              name: 'Bar charts',
              to: paths.barCharts,
              active: true
            },
            {
              name: 'Candlestick charts',
              to: paths.candlestickCharts,
              active: true
            },
            {
              name: 'Geo map',
              to: paths.geoMap,
              active: true
            },
            {
              name: 'Scatter charts',
              to: paths.scatterCharts,
              active: true
            },
            {
              name: 'Pie charts',
              to: paths.pieCharts,
              active: true
            },
            {
              name: 'Radar charts',
              to: paths.radarCharts,
              active: true
            },
            {
              name: 'Heatmap charts',
              to: paths.heatmapCharts,
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Icons',
      active: true,
      icon: 'shapes',
      children: [
        {
          name: 'Font awesome',
          to: paths.fontAwesome,
          active: true
        },
        {
          name: 'React icons',
          to: paths.reactIcons,
          active: true
        }
      ]
    },
    {
      name: 'Maps',
      icon: 'map',
      active: true,
      children: [
        {
          name: 'Google map',
          to: paths.googleMap,
          active: true
        },
        {
          name: 'Leaflet map',
          to: paths.leafletMap,
          active: true
        }
      ]
    },
    {
      name: 'Components',
      active: true,
      icon: 'puzzle-piece',
      children: [
        {
          name: 'Alerts',
          to: paths.alerts,
          active: true
        },
        {
          name: 'Accordion',
          to: paths.accordion,
          active: true
        },
        {
          name: 'Animated icons',
          to: paths.animatedIcons,
          active: true
        },
        {
          name: 'Backgrounds',
          to: paths.background,
          active: true
        },
        {
          name: 'Badges',
          to: paths.badges,
          active: true
        },
        {
          name: 'Breadcrumbs',
          to: paths.breadcrumbs,
          active: true
        },
        {
          name: 'Buttons',
          to: paths.buttons,
          active: true
        },
        {
          name: 'Calendar',
          to: paths.calendar,
          active: true
        },
        {
          name: 'Cards',
          to: paths.cards,
          active: true
        },
        {
          name: 'Carousel',
          active: true,
          children: [
            {
              name: 'Bootstrap',
              to: paths.bootstrapCarousel,
              label: 'bootstrap-carousel',
              active: true
            },
            {
              name: 'Slick',
              to: paths.slickCarousel,
              active: true
            }
          ]
        },
        {
          name: 'Collapse',
          to: paths.collapse,
          active: true
        },
        {
          name: 'Cookie notice',
          to: paths.cookieNotice,
          active: true
        },
        {
          name: 'Countup',
          to: paths.countup,
          active: true
        },
        {
          name: 'Draggable',
          to: paths.draggable,
          active: true
        },
        {
          name: 'Dropdowns',
          to: paths.dropdowns,
          active: true
        },
        {
          name: 'List group',
          to: paths.listGroup,
          active: true
        },
        {
          name: 'Modals',
          to: paths.modals,
          active: true
        },
        {
          name: 'Offcanvas',
          to: paths.offcanvas,
          active: true
        },
        {
          name: 'Navs & Tabs',
          active: true,
          children: [
            {
              name: 'Navs',
              to: paths.navs,
              active: true
            },
            {
              name: 'Navbar',
              to: paths.navbar,
              active: true
            },
            {
              name: 'Vertical navbar',
              to: paths.verticalNavbar,
              active: true
            },
            {
              name: 'Top navbar',
              to: paths.topNavbar,
              active: true
            },
            {
              name: 'Double Top',
              to: paths.doubleTopNavbar,
              active: true
            },
            {
              name: 'Combo navbar',
              to: paths.comboNavbar,
              active: true
            },
            {
              name: 'Tabs',
              to: paths.tabs,
              active: true
            }
          ]
        },
        {
          name: 'Pictures',
          active: true,
          children: [
            {
              name: 'Avatar',
              to: paths.avatar,
              active: true
            },
            {
              name: 'Images',
              to: paths.images,
              active: true
            },
            {
              name: 'Figures',
              to: paths.figures,
              active: true
            },
            {
              name: 'Hoverbox',
              to: paths.hoverbox,
              active: true
            },
            {
              name: 'Lightbox',
              to: paths.lightbox,
              active: true
            }
          ]
        },
        {
          name: 'Progress Bar',
          to: paths.progressBar,
          active: true
        },
        {
          name: 'Pagination',
          to: paths.pagination,
          active: true
        },
        {
          name: 'Placeholder',
          to: paths.placeholder,
          active: true
        },
        {
          name: 'Popovers',
          to: paths.popovers,
          active: true
        },
        {
          name: 'Scrollspy',
          to: paths.scrollspy,
          active: true
        },
        {
          name: 'Search',
          to: paths.search,
          active: true
        },
        {
          name: 'Spinners',
          to: paths.spinners,
          active: true
        },
        {
          name: 'Timeline',
          to: paths.timeline,
          active: true
        },
        {
          name: 'Toasts',
          to: paths.toasts,
          active: true
        },
        {
          name: 'Tooltips',
          to: paths.tooltips,
          active: true
        },
        {
          name: 'Treeview',
          to: paths.treeview,
          active: true
        },
        {
          name: 'Typed text',
          to: paths.typedText,
          active: true
        },
        {
          name: 'Videos',
          active: true,
          children: [
            {
              name: 'Embed',
              to: paths.embedVideo,
              active: true
            },
            {
              name: 'React Player',
              to: paths.reactPlayer,
              active: true
            }
          ]
        }
      ]
    },
    {
      name: 'Utilities',
      active: true,
      icon: 'fire',
      children: [
        {
          name: 'Background',
          to: paths.backgroundColor,
          active: true
        },
        {
          name: 'Borders',
          to: paths.borders,
          active: true
        },
        {
          name: 'Colors',
          to: paths.colors,
          active: true
        },
        {
          name: 'Colored links',
          to: paths.coloredLinks,
          active: true
        },
        {
          name: 'Display',
          to: paths.display,
          active: true
        },
        {
          name: 'Flex',
          to: paths.flex,
          active: true
        },
        {
          name: 'Float',
          to: paths.float,
          active: true
        },
        {
          name: 'Grid',
          to: paths.grid,
          active: true
        },
        {
          name: 'Scroll Bar',
          to: paths.scrollBar,
          active: true
        },
        {
          name: 'Position',
          to: paths.position,
          active: true
        },
        {
          name: 'Spacing',
          to: paths.spacing,
          active: true
        },
        {
          name: 'Sizing',
          to: paths.sizing,
          active: true
        },
        {
          name: 'Stretched link',
          to: paths.stretchedLink,
          active: true
        },
        {
          name: 'Text truncation',
          to: paths.textTruncation,
          active: true
        },
        {
          name: 'Typography',
          to: paths.typography,
          active: true
        },
        {
          name: 'Vertical align',
          to: paths.verticalAlign,
          active: true
        },
        {
          name: 'Visibility',
          to: paths.visibility,
          active: true
        }
      ]
    },
    {
      name: 'Widgets',
      icon: 'poll',
      to: paths.widgets,
      active: true
    },
    {
      name: 'Multi level',
      active: true,
      icon: 'layer-group',
      children: [
        {
          name: 'Level two',
          active: true,
          children: [
            {
              name: 'Item 1',
              active: true,
              to: '#!'
            },
            {
              name: 'Item 2',
              active: true,
              to: '#!'
            }
          ]
        },
        {
          name: 'Level three',
          active: true,
          children: [
            {
              name: 'Item 3',
              active: true,
              to: '#!'
            },
            {
              name: 'Item 4',
              active: true,
              children: [
                {
                  name: 'Item 5',
                  active: true,
                  to: '#!'
                },
                {
                  name: 'Item 6',
                  active: true,
                  to: '#!'
                }
              ]
            }
          ]
        },
        {
          name: 'Level four',
          active: true,
          children: [
            {
              name: 'Item 6',
              active: true,
              to: '#!'
            },
            {
              name: 'Item 7',
              active: true,
              children: [
                {
                  name: 'Item 8',
                  active: true,
                  to: '#!'
                },
                {
                  name: 'Item 9',
                  active: true,
                  children: [
                    {
                      name: 'Item 10',
                      active: true,
                      to: '#!'
                    },
                    {
                      name: 'Item 11',
                      active: true,
                      to: '#!'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const documentationRoutes = {
  label: 'documentation',
  children: [
    {
      name: 'Getting started',
      icon: 'rocket',
      to: paths.gettingStarted,
      active: true
    },
    {
      name: 'Customization',
      active: true,
      icon: 'wrench',
      children: [
        {
          name: 'Configuration',
          to: paths.configuration,
          active: true
        },
        {
          name: 'Styling',
          to: paths.styling,
          active: true
        },
        {
          name: 'Dark mode',
          to: paths.darkMode,
          active: true
        },
        {
          name: 'Plugin',
          to: paths.plugin,
          active: true
        }
      ]
    },
    {
      name: 'Faq',
      icon: 'question-circle',
      to: paths.faq,
      active: true
    },
    {
      name: 'Design file',
      icon: 'palette',
      to: paths.designFile,
      active: true
    },
    {
      name: 'Changelog',
      icon: 'code-branch',
      to: paths.changelog,
      active: true
    }
  ]
};

export default [dashboardRoutes, appRoutes];
