import "@4tw/cypress-drag-drop";

describe("Visiting My Website", function () {
  it("Visiting My Website", function () {
    cy.visit("localhost:8080");
  });
});

describe("Add My Task", function () {
  const typedText = "Buy Milk";

  describe("Add My Task By Entering", function () {
    it("Write My Task", function () {
      cy.get("#input-2").type(typedText).should("have.value", typedText);
    });
    it("Entering", function () {
      cy.get("#input-2").type("{enter}");
      // 추가된 요소
      cy.get(".list-group-item:last-child")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).equal(typedText);
        });
    });
  });

  describe("Add My Task By Clicking", function () {
    it("Write My Task", function () {
      cy.get("#input-2").type(typedText).should("have.value", typedText);
    });
    it("Add My Task By Clicking Button", function () {
      cy.get(".btn").click();
      cy.get(".list-group-item:last-child")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).equal(typedText);
        });
    });
  });
  describe("Drag and Drop My Task", function () {
    it("Drag and Drop My Task", function () {
      cy.get(".list-group-item:last-child").drag("#in-progress", {
        force: true,
        position: "center",
      });
    });
  });
});
