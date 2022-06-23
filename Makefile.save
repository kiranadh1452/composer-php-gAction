.PHONY: all say_hello generate clean

all: say_hello create

say_hello:
	@echo "Hello world"

create:
	@echo "Creating empty text files..."
	touch file-{1..10}.docx

clean:
	@echo "Deleting the docx file"
	rm *.docx
