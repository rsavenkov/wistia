import React, { useState, useEffect } from "react"
import classnames from "classnames"
import Select from "react-select"

import MaterialCard from "../MaterialCard/MaterialCard"

import ArrowDownIcon from "../../public/icons/arrow-down.svg"

const filters = [
  {
    value: -1,
    label: "All"
  },
  {
    value: 0,
    label: "Videos"
  },
  {
    value: 1,
    label: "Articles"
  },
  {
    value: 2,
    label: "Notes"
  }
]

interface iOption {
  label: string,
  value: number
}

type MaterialProps = {
  video_id: any,
  previewSrc?: string,
  type: string,
  title: string,
  type_id: number,
  case_covboy_id: number,
  case_covid19_id: number,
  case_uncle_id: number
}

type MaterialsProps = {
  title: string,
  materials: Array<MaterialProps>,
  showPerPage: number,
  dataActiveMenu: number,
  clinicalCase: string,
  aFilter: number
}

const Materials: React.FC<MaterialsProps> = ({ title, materials, showPerPage, dataActiveMenu, clinicalCase, aFilter }) => {

  let filteredMaterials;

  switch (clinicalCase) {
    case 'none' :
      filteredMaterials = materials;
      break;
    case 'covboy' :
      filteredMaterials = materials.sort((a, b) => a.case_covboy_id > b.case_covboy_id ? 1 : -1);
      break;
    case 'covid19' :
      filteredMaterials = materials.sort((a, b) => a.case_covid19_id > b.case_covid19_id ? 1 : -1);
      break;
    case 'uncle' :
      filteredMaterials = materials.sort((a, b) => a.case_uncle_id > b.case_uncle_id ? 1 : -1);
      break;
  }

  const [list, setList] = useState<Array<MaterialProps>>(filteredMaterials)
  const [activeFilter, setActiveFilter] = useState<number>(aFilter)
  const [q, setQ] = useState<string>("")
  const [showPer, setShowPer] = useState<number>(showPerPage)
  const [deleteSearch, setDeleteSearch] = useState<boolean>(false)

  useEffect(() => {
    setActiveFilter(aFilter)
  }, [aFilter]);

  const changeFilterHandler = (id: number) => {
    setActiveFilter(id)
  }

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value.toLowerCase())
  }

  useEffect(() => {
    let result = materials.filter(material => {
      if(activeFilter >= 0) {
        return material.title.toLowerCase().includes(q) && material.type_id === activeFilter
      } else {
        return material.title.toLowerCase().includes(q)
      }
    })

    if (result.length == 0 && activeFilter >= 0) {
      result = materials.filter(material => {
        return material.title.toLowerCase().includes(q)
      })
      setActiveFilter(-1)
    }

    setList(result)
    setShowPer(showPerPage)
  }, [q, activeFilter])

  return (
      <section className="materials">
        <div className="container">
          <h2 className="materials__title js-menu-sceen" data-active-menu={dataActiveMenu}>
            {title}
          </h2>

          <div className="materials__header">
            <div className="materials__nav">
              {filters.map((filter, key) => (
                  <div key={key}
                       className={classnames("materials__nav-item", {
                         "materials__nav-item--active": activeFilter === filter.value
                       })}
                       onClick={() => changeFilterHandler(filter.value)}
                  >
                    {filter.label}
                  </div>
              ))}
            </div>

            <div className="materials__select">
              <Select
                  className="custom-select"
                  classNamePrefix="custom-select"
                  options={filters}
                  value={filters.find(item => item.value === activeFilter)}
                  onChange={(option) => changeFilterHandler((option as iOption).value)}
                  styles={{
                    control: () => ({}),
                    valueContainer: () => ({}),
                    menu: () => ({}),
                    option: () => ({}),
                    dropdownIndicator: () => ({}),
                    singleValue: () => ({})
                  }}
              />
            </div>
          </div>

          <div className="materials__list">
            {list.length == 0 && <p style={{width: '100%', textAlign: "center"}}>Нет подходящих результатов</p>}
            {list.slice(0, showPer).map((material, key) => (
                <div key={key} className="materials__list-item">
                  <MaterialCard material={material}/>
                </div>
            ))}
          </div>

          {list.length > showPer &&
          <div className="materials__load-more"
               onClick={() => setShowPer(showPer + 12)}
          >
            Показать больше
            <ArrowDownIcon/>
          </div>
          }
        </div>
      </section>
  );
}

export default Materials
