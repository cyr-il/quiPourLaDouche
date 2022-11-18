<?php

namespace App\Controller;

use App\Entity\Winner;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class WinnerController extends AbstractController
{

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }


    #[Route('/', name: 'app_winner')]
    public function index(): Response
    {
        //dump($_REQUEST);    
        if(isset($_REQUEST['winner'])){
            $winners = new Winner;
            $winnerFromJs = ($_REQUEST['winner']);
            $winners->setName($winnerFromJs);
            $winners->setDate(new \DateTime());
    
            $this->em->persist($winners);
            $this->em->flush($winners);

            return $this->redirectToRoute("app_winner");
        }else {
            $winners = $this->em->getRepository(Winner::class)->findAll();
        }

        return $this->render('winner/index.html.twig', [
            'controller_name' => 'WinnerController',
            'winners' => $winners
        ]);
    }
}
