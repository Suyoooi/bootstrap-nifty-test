// import Layout from "@/components/layout/layout";
import { useCallback, useEffect, useState, useRef, useContext } from "react";

export default function TibEmsSrvrHome() {
  return (
    <>
      <title>TIBCO : EMS 서버 관리</title>
      <div className="content__header content__boxed overlapping">
        <div className="content__wrap">
          <h1 className="mb-2 page-title">EMS 서버 관리</h1>
        </div>
      </div>
      <div className="content__boxed">
        <div className="content__wrap">
          <div className="card">
            <div className="card-body">
              <form className="row">
                <div className="row col-md-10">
                  <div className="mb-3 row col-md-4">
                    <label className="col-sm-4 col-form-label text-sm-end">
                      FAB 위치
                    </label>
                    <div className="col-sm-8">
                      <select className="form-select"></select>
                    </div>
                  </div>
                  <div className="mb-3 row col-md-4">
                    <label className="col-sm-4 col-form-label text-sm-end">
                      FAB
                    </label>
                    <div className="col-sm-8">
                      <select className="form-select"></select>
                    </div>
                  </div>
                  <div className="mb-3 row col-md-4">
                    <label className="col-sm-4 col-form-label text-sm-end">
                      EMS 서버명
                    </label>
                    <div className="col-sm-8">
                      <select className="form-select"></select>
                    </div>
                  </div>
                  <div className="mb-3 row col-md-4">
                    <label className="col-sm-4 col-form-label text-sm-end">
                      일시
                    </label>
                    <div className="flex col-sm-8">
                      <select className="form-select"></select>
                      <select className="form-select"></select>
                      <button type="" className="btn btn-info btn-md">
                        Quick
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="flex-wrap gap-2 d-flex justify-content-left">
                    <button type="button" className=" btn btn-info btn-md">
                      + 상세입력
                    </button>
                    <button type="submit" className="btn btn-info btn-md">
                      조회
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-3 content__boxed">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="_dm-tabulatorPagination"
                    className="table table-striped"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
