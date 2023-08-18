import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import image from "../assets/rob.png";
import prop from "../assets/download.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { useState } from "react";
export const SocialProfileSimple = () => {
  const [text, setText] = useState({
    title: "",
    description: "",
  });
  const [isEmail, setIsEmail] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleEmailClick = () => {
    const recipient = "destinatario@example.com";
    const subject = "Assunto do e-mail";
    const body = "Corpo do e-mail";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const sendMessage = () => {
    if (isEmail) {
      handleEmailClick();
    } else {
      window.location.href =
        "https://wa.me/559499723307" +
        "?text=Olá!! Eu quero saber sobre: " +
        text.title +
        " Pode me ajudar?";
    }
  };

  const handleEbook = () => {
    window.location.href = "https://sun.eduzz.com/1953858";
  };

  return (
    <Center h={"100vh"} py={2} w={"100%"}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={2}
        textAlign={"center"}
      >
        <Avatar size={"2xl"} src={image} mb={4} pos={"relative"} />
        <Heading fontSize={"lg"} fontFamily={"body"}>
          Robsilene Coimbra
        </Heading>
        <Text fontSize={"sm"} fontWeight={600} color={"gray.500"} mb={4}>
          @robicoimbra
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          fontSize={"xs"}
        >
          🧠 RH|Headhunter|Treinamento
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          fontSize={"xs"}
        >
          🚀Atração e Seleção com 97% de assertividade
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          fontSize={"xs"}
        >
          🎯Ajudo empresas a terem processos de gestão de pessoas por
          competências
        </Text>

        <Stack mt={8}>
          <Button
            fontSize={"sm"}
            rounded={"full"}
            position={"relative"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={() => {
              onOpen();
              setText({
                title: "ATRAÇÃO E SELEÇÃO",
                description: "A excelência começa com a escolha certa!",
              });
            }}
          >
            <Box position={"absolute"} left={"6px"}>
              <Avatar size={"sm"} src={prop} />
            </Box>
            Atração e Seleção
          </Button>
          <Button
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            whiteSpace={"normal"}
            onClick={() => {
              onOpen();
              setText({
                title: "GESTÃO DE PESSOAS POR COMPETÊNCIAS",
                description:
                  "Transforme o potencial humano em estratégia de sucesso: invista em um RH estratégico para guiar sua empresa ao futuro!",
              });
            }}
          >
            <Box position={"absolute"} left={"6px"}>
              <Avatar size={"sm"} src={prop} />
            </Box>
            Gestão por Competência
          </Button>
          <Button
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={() => {
              onOpen();
              setText({
                title: "PALESTRAS E TREINAMENTO",
                description:
                  "Ilumine sua mente, eleve seu potencial: cada treinamento, um novo horizonte de possibilidades!",
              });
            }}
          >
            <Box position={"absolute"} left={"6px"}>
              <Avatar size={"sm"} src={prop} />
            </Box>
            Palestra e Treinamento
          </Button>
          <Button
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={() => {
              onOpen();
              setText({
                title: "Banco de talentos",
                description:
                  "Mais do que vagas, oferecemos destinos. Trace sua trajetória conosco!",
              });
              setIsEmail(true);
            }}
          >
            <Box position={"absolute"} left={"6px"}>
              <Avatar size={"sm"} src={prop} />
            </Box>
            Banco de talentos
          </Button>

          <Button
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={handleEbook}
          >
            <Box position={"absolute"} left={"6px"}>
              <Avatar size={"sm"} src={prop} />
            </Box>
            E-book
          </Button>
        </Stack>
        <Stack justifyContent={"center"} pt={6} direction={"row"} spacing={2}>
          <BsFacebook
            color="#1877F2"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/profile.php?id=100087955519913")
            }
            fontSize="30px"
          />
          <BsWhatsapp
            color="#25D366"
            onClick={() =>
              (window.location.href = "https://wa.me/559499723307")
            }
            fontSize="30px"
          />
          <BsLinkedin
            color="#0A66C2"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/robsilenecoimbra/")
            }
            fontSize="30px"
          />
          <BsInstagram
            color="#8a3ab9"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/robicoimbra/")
            }
            fontSize="30px"
          />
        </Stack>
      </Box>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        isCentered
        onClose={() => {
          setIsEmail(true);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{text.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              {text.description}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              leftIcon={<BsWhatsapp />}
              colorScheme="whatsapp"
              mr={3}
              onClick={sendMessage}
            >
              Enviar mensagem
            </Button>
            <Button onClick={onClose} variant="ghost">
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
