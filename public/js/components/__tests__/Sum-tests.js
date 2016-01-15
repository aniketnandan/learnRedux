jest.dontMock("../CheckBox.jsx");

import React from "react";
import ReactDom from "react-dom";
import testUtils from "react-addons-test-utils";

const CheckBox = require("../CheckBox.jsx");

describe("CheckBox", () => {
  it("checking checkbox is checked or not", () => {
    var checkingCheckBox = testUtils.renderIntoDocument(
      <CheckBox labelOn="On" labelOff="Off" />
    );
    var findCheckBox = ReactDom.findDomNode(checkingCheckBox);

    except(findCheckBox.textContent).toEqual("Off");

    testUtils.Simulate.change(
      testUtils.findRenderedDomComponentWithTag(checkbox, "input");
    );

    except(findCheckBox.textContent).toEqual("On");
  })
})
